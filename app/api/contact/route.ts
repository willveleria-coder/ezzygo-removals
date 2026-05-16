import { NextRequest, NextResponse } from 'next/server';

const WEB3FORMS_ACCESS_KEY = '1c8483de-a983-4b05-8d7e-db1e6e3074bf';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const isBooking = data.type === 'booking';

    const subject = isBooking
      ? `🚚 New Booking — ${data.service || 'Move'} on ${data.date} at ${data.time}`
      : `📩 New Quote Request — ${data.name || 'EzzyGo Website'}`;

    // Build a clean text message + HTML for Web3Forms
    const message = isBooking
      ? buildBookingMessage(data)
      : buildQuoteMessage(data);

    // Log to Vercel function logs (backup)
    console.log(`[${isBooking ? 'BOOKING' : 'QUOTE'}]`, JSON.stringify(data, null, 2));

    // Forward to Web3Forms
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: 'EzzyGo Website',
        // Reply-To: customer's email so he can reply directly
        replyto: data.email,
        // The actual message body
        message,
        // Pass through individual fields too (so Web3Forms can show them structured)
        name: data.name,
        email: data.email,
        phone: data.phone,
        ...(isBooking && {
          service: data.service,
          property_size: data.propertySize,
          movers: data.movers,
          items: data.items,
          date: data.date,
          time: data.time,
          access_pickup: formatAccess(data.stairsFrom),
          access_dropoff: formatAccess(data.stairsTo),
          parking: formatParking(data.parking),
        }),
        moving_from: data.from,
        moving_to: data.to,
        notes: data.notes || data.message,
        // Use Web3Forms HTML template
        botcheck: '', // honeypot field for spam
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Web3Forms error:', errorText);
      // Return the actual error so we can debug
      return NextResponse.json({
        ok: false,
        web3forms_status: res.status,
        web3forms_error: errorText,
      });
    }

    const successData = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, web3forms: successData });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}

function buildBookingMessage(d: any): string {
  const lines = [
    `═══════════════════════════════════`,
    `      NEW BOOKING REQUEST`,
    `═══════════════════════════════════`,
    ``,
    `🚚  SERVICE:        ${d.service || '—'}`,
    `📅  DATE:           ${d.date || '—'}`,
    `🕐  TIME:           ${d.time || '—'}`,
    ``,
    `───────────────────────────────────`,
    `  CUSTOMER`,
    `───────────────────────────────────`,
    `👤  Name:           ${d.name || '—'}`,
    `📞  Phone:          ${d.phone || '—'}`,
    `✉️   Email:          ${d.email || '—'}`,
    ``,
    `───────────────────────────────────`,
    `  MOVE DETAILS`,
    `───────────────────────────────────`,
    `🏠  Property size:  ${d.propertySize || 'Not specified'}`,
    `👥  Crew requested: ${d.movers || 2} movers`,
    `📦  Items:          ${d.items || 'Not specified'}`,
    ``,
    `📍  Moving FROM:    ${d.from || '—'}`,
    `📍  Moving TO:      ${d.to || '—'}`,
    ``,
    `───────────────────────────────────`,
    `  ACCESS & PARKING`,
    `───────────────────────────────────`,
    `🚪  Access (from):  ${formatAccess(d.stairsFrom)}`,
    `🚪  Access (to):    ${formatAccess(d.stairsTo)}`,
    `🅿️   Parking:        ${formatParking(d.parking)}`,
    ``,
  ];

  if (d.notes) {
    lines.push(`───────────────────────────────────`);
    lines.push(`  NOTES`);
    lines.push(`───────────────────────────────────`);
    lines.push(d.notes);
    lines.push(``);
  }

  lines.push(`═══════════════════════════════════`);
  lines.push(`Sent from ezzygoremovalist.com.au`);

  return lines.join('\n');
}

function buildQuoteMessage(d: any): string {
  const lines = [
    `═══════════════════════════════════`,
    `      NEW QUOTE REQUEST`,
    `═══════════════════════════════════`,
    ``,
    `👤  NAME:     ${d.name || '—'}`,
    `📞  PHONE:    ${d.phone || '—'}`,
    `✉️   EMAIL:    ${d.email || '—'}`,
    ``,
  ];

  if (d.service)      lines.push(`🚚  SERVICE:  ${d.service}`);
  if (d.from)         lines.push(`📍  FROM:     ${d.from}`);
  if (d.to)           lines.push(`📍  TO:       ${d.to}`);
  if (d.date)         lines.push(`📅  DATE:     ${d.date}`);

  if (d.message) {
    lines.push(``);
    lines.push(`───────────────────────────────────`);
    lines.push(`  MESSAGE`);
    lines.push(`───────────────────────────────────`);
    lines.push(d.message);
  }

  lines.push(``);
  lines.push(`═══════════════════════════════════`);
  lines.push(`Sent from ezzygoremovalist.com.au`);

  return lines.join('\n');
}

function formatAccess(v: string): string {
  const map: Record<string, string> = {
    'ground':    'Ground floor',
    'few-steps': 'Few steps',
    'flights':   'Stairs (no lift)',
    'lift':      'Lift access',
  };
  return v ? (map[v] || v) : 'Not specified';
}

function formatParking(v: string): string {
  const map: Record<string, string> = {
    'yes':   'Easy / driveway',
    'tight': 'Tight / street parking',
    'no':    'Restricted parking',
  };
  return v ? (map[v] || v) : 'Not specified';
}