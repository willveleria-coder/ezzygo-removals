import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  { auth: { persistSession: false } }
);

const MODEL = 'claude-haiku-4-5-20251001';

const SYSTEM = `You are the assistant for EzzyGo Removalist on their website. Warm, friendly, concise Aussie tone. Keep replies short (1–3 sentences) — this is a small chat window on mobile.

ABOUT EZZYGO
- Removalists serving ALL of Queensland (Brisbane, Gold Coast, Logan, etc.).
- Phone: +61 481 356 811. Email: way2026@ezzygoremovalist.com.au.
- Open 7 days, 7am–9pm. Free, no-pressure quotes. We confirm by text, usually within the hour.
- Services: House move, Furniture transport, Office relocation, Interstate move, Same-day move, Packing service, Load & unload only, Storage.

PRICING — these are the ONLY figures you may state. NEVER invent or guess other numbers.
- Movers + truck, hourly: 2 movers = $169/hr, 3 movers = $219/hr, 4+ movers = $279/hr.
- 2-hour minimum on every job.
- Fuel levy: $14 flat.
- Travel surcharge: $2.50/km for distance beyond the first 10 km.
- Same-day / urgent jobs: +15%.
- GST and insurance are included.

ESTIMATING (optional, only if they give you size + distance)
- You MAY give a rough ballpark using the rates above, but ALWAYS call it an estimate and say the team confirms a fixed price.
- Crew guide: studio/1–2 bed → 2 movers; 3 bed → 3 movers; 4+ bed or office → 4 movers.
- Typical hours guide: studio ~2h, 1 bed ~3h, 2 bed ~4h, 3 bed ~6h, 4+ bed ~8h.

HARD RULES
- Never invent prices, never make up availability, never promise a specific time slot.
- Do NOT confirm or finalise a booking — you collect details; the team confirms by text.
- Be helpful first; don't interrogate. Ask for name + mobile naturally once the conversation is going.

YOUR GOAL
- Once you have the customer's NAME and a PHONE or EMAIL, plus a sense of what they need (service / size / from / to / date), call the save_lead tool to pass it to the team. After saving, reassure them the team will text a fixed quote shortly.`;

const tools = [
  {
    name: 'save_lead',
    description:
      "Save the customer's enquiry to the team once you have their name and a phone or email. Call this as soon as you have enough to follow up.",
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: "Customer's name" },
        phone: { type: 'string', description: 'Phone number if given' },
        email: { type: 'string', description: 'Email if given' },
        service: { type: 'string', description: 'Service type if known (e.g. House move)' },
        summary: { type: 'string', description: 'Short summary of what they need: size, from, to, date, any notes' },
      },
      required: ['name', 'summary'],
    },
  },
];

async function saveLead(input: any) {
  try {
    await admin.from('form_submissions').insert({
      name: input?.name ?? null,
      email: input?.email ?? null,
      phone: input?.phone ?? null,
      subject: `Chat enquiry${input?.service ? ' — ' + input.service : ''}`,
      message: input?.summary ?? null,
    });
    return 'Lead saved to the team.';
  } catch (e) {
    console.error('save_lead insert failed', e);
    return 'Acknowledged (save failed server-side).';
  }
}

async function callClaude(messages: any[]) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: MODEL, max_tokens: 1024, system: SYSTEM, tools, messages }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Anthropic ${res.status}: ${detail}`);
  }
  return res.json();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const incoming: { role: 'user' | 'assistant'; content: string }[] = body?.messages ?? [];

    // Build Anthropic-format history
    const messages: any[] = incoming
      .filter((m) => m && m.content)
      .map((m) => ({ role: m.role, content: m.content }));

    // Tool loop (max 4 rounds)
    for (let i = 0; i < 4; i++) {
      const data = await callClaude(messages);

      if (data.stop_reason === 'tool_use') {
        const toolUses = (data.content ?? []).filter((b: any) => b.type === 'tool_use');
        messages.push({ role: 'assistant', content: data.content });
        const results = [];
        for (const t of toolUses) {
          const out = t.name === 'save_lead' ? await saveLead(t.input) : 'Unknown tool.';
          results.push({ type: 'tool_result', tool_use_id: t.id, content: out });
        }
        messages.push({ role: 'user', content: results });
        continue; // ask Claude again so it produces a text reply
      }

      const reply = (data.content ?? [])
        .filter((b: any) => b.type === 'text')
        .map((b: any) => b.text)
        .join('\n')
        .trim();

      return NextResponse.json({ reply: reply || "We'll text you a fixed quote shortly!" });
    }

    return NextResponse.json({ reply: "Thanks! The team will be in touch shortly with your quote." });
  } catch (e) {
    console.error('chat route error', e);
    return NextResponse.json(
      { reply: "Sorry — I'm having a moment. Give us a call on +61 481 356 811 and we'll sort you out." },
      { status: 200 }
    );
  }
}