'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const WELCOME =
  "G'day! 👋 I'm the EzzyGo assistant. Tell me about your move — where you're going from and to, and roughly what you're shifting — and I'll sort you a fixed quote.";

const QUICK = ['Get a quote', 'Areas you cover', 'Availability'];

/* ────────────────────────────────────────────────────────────
   THE BRAIN. Right now this is a mock so you can see it working.
   Later, replace the body of getBotReply with a fetch to /api/chat:

     const res = await fetch('/api/chat', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ messages: history }),
     });
     const data = await res.json();
     return data.reply as string;

   The UI below never needs to change.
   ──────────────────────────────────────────────────────────── */
async function getBotReply(history: Msg[]): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: history }),
  });
  if (!res.ok) throw new Error('chat request failed');
  const data = await res.json();
  return (data.reply as string) || "Sorry — give us a call on +61 481 356 811 and we'll sort you out.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    const next: Msg[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');
    setThinking(true);
    try {
      const reply = await getBotReply(next);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (_) {
      setMessages((m) => [...m, { role: 'assistant', content: "Sorry — connection hiccup. Give us a call on +61 481 356 811 and we'll sort you out." }]);
    } finally {
      setThinking(false);
    }
  }

  const TruckIcon = ({ s = 22, c = '#fff' }: { s?: number; c?: string }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );

  return (
    <>
      <style>{`
        @keyframes cw-ping { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes cw-dot { 0%,60%,100%{transform:translateY(0);opacity:.5} 30%{transform:translateY(-4px);opacity:1} }
        .cw-body::-webkit-scrollbar{width:5px} .cw-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.12);border-radius:3px}
        .cw-input::placeholder{color:#b3aea5}
      `}</style>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            style={{
              position: 'fixed', right: 20, bottom: 96, width: 'min(384px, calc(100vw - 32px))',
              height: 'min(600px, calc(100vh - 130px))', zIndex: 9999,
              borderRadius: 24, overflow: 'hidden', background: '#F5F4F1',
              boxShadow: '0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            {/* Header */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg,#1d1d23,#121214)', padding: '18px 18px 16px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -30, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,107,0,0.35),transparent 70%)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, position: 'relative', zIndex: 1 }}>
                <div style={{ width: 42, height: 42, borderRadius: 13, background: 'linear-gradient(135deg,#FF6B00,#f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(255,107,0,0.4)', flexShrink: 0 }}>
                  <TruckIcon />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 19, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1 }}>
                    <span style={{ color: '#FF6B00' }}>EZZY</span><span style={{ color: '#7DD3FC' }}>GO</span> Assistant
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 0 3px rgba(52,211,153,0.25)' }} /> Online · replies instantly
                  </div>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close chat" style={{ marginLeft: 'auto', width: 30, height: 30, borderRadius: 9, background: 'rgba(255,255,255,0.08)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
                  <X size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={bodyRef} className="cw-body" style={{ flex: 1, padding: '18px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {messages.map((m, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-end', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    {m.role === 'assistant' && (
                      <div style={{ width: 26, height: 26, borderRadius: 8, background: '#1d1d23', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <TruckIcon s={13} c="#FF6B00" />
                      </div>
                    )}
                    <div style={{
                      maxWidth: '74%', padding: '11px 14px', borderRadius: 16, fontSize: 14, lineHeight: 1.5,
                      ...(m.role === 'user'
                        ? { background: '#FF6B00', color: '#fff', borderBottomRightRadius: 5, boxShadow: '0 6px 16px rgba(255,107,0,0.28)' }
                        : { background: '#fff', color: '#1a1a1f', border: '1px solid rgba(0,0,0,0.06)', borderBottomLeftRadius: 5, boxShadow: '0 2px 8px rgba(20,16,8,0.04)' }),
                    }}>
                      {m.content}
                    </div>
                  </div>

                  {/* Quick replies under the first assistant message only */}
                  {i === 0 && messages.length === 1 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 8, paddingLeft: 35 }}>
                      {QUICK.map((q) => (
                        <button key={q} onClick={() => send(q)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FF6B00', background: '#fff', border: '1.5px solid rgba(255,107,0,0.3)', borderRadius: 999, padding: '7px 13px', cursor: 'pointer' }}>
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {thinking && (
                <div style={{ display: 'flex', gap: 9, alignItems: 'flex-end' }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: '#1d1d23', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <TruckIcon s={13} c="#FF6B00" />
                  </div>
                  <div style={{ display: 'flex', gap: 4, padding: '13px 15px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 16, borderBottomLeftRadius: 5 }}>
                    {[0, 1, 2].map((d) => (
                      <span key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9c4bb', animation: `cw-dot 1.2s infinite`, animationDelay: `${d * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer / input */}
            <div style={{ padding: '12px 14px calc(12px + env(safe-area-inset-bottom))', background: '#F5F4F1', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', border: '1.5px solid rgba(0,0,0,0.09)', borderRadius: 14, padding: '7px 7px 7px 15px' }}>
                <input
                  className="cw-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') send(input); }}
                  placeholder="Type your message…"
                  style={{ flex: 1, border: 'none', outline: 'none', fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#1a1a1f', background: 'transparent' }}
                />
                <button onClick={() => send(input)} aria-label="Send" style={{ width: 38, height: 38, borderRadius: 11, background: '#FF6B00', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(255,107,0,0.32)', cursor: 'pointer', flexShrink: 0 }}>
                  <ArrowRight size={17} color="#fff" />
                </button>
              </div>
              <div style={{ textAlign: 'center', fontFamily: "'Space Mono', monospace", fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginTop: 9 }}>
                Powered by EzzyGo · We reply within the hour
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.4, stiffness: 260, damping: 18 }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed', right: 20, bottom: 'calc(20px + env(safe-area-inset-bottom))', width: 62, height: 62,
          borderRadius: 20, border: 'none', background: 'linear-gradient(135deg,#FF6B00,#ea6c0a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          boxShadow: '0 14px 34px rgba(255,107,0,0.45)', zIndex: 9999,
        }}
      >
        {!open && <span style={{ position: 'absolute', top: -3, right: -3, width: 16, height: 16, borderRadius: '50%', background: '#34d399', border: '2.5px solid #F5F4F1', animation: 'cw-ping 2s infinite' }} />}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={26} color="#fff" />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={27} color="#fff" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}