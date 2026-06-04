'use client';

import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Shield, Zap, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { label: 'Moves Completed', value: '2,400+' },
  { label: 'Avg Rating', value: '4.9★' },
  { label: 'On-Time Rate', value: '98%' },
];

const trustBadges = [
  { icon: Shield, label: 'Fully insured', blue: true },
  { icon: Zap, label: 'Same-day', blue: false },
  { icon: MapPin, label: 'Local QLD', blue: false },
  { icon: Star, label: '4.9 ★', fill: true, blue: false },
];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', from: '', to: '', date: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const message = [
        `═══════════════════════════════════`,
        `   NEW QUOTE REQUEST (Hero form)`,
        `═══════════════════════════════════`,
        ``,
        `👤  NAME:     ${form.name}`,
        `📞  PHONE:    ${form.phone}`,
        ``,
        `📍  FROM:     ${form.from}`,
        `📍  TO:       ${form.to}`,
        form.date ? `📅  DATE:     ${form.date}` : '',
        ``,
        `═══════════════════════════════════`,
        `Sent from ezzygoremovalist.com.au`,
      ].filter(Boolean).join('\n');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '1c8483de-a983-4b05-8d7e-db1e6e3074bf',
          subject: `📩 Hero Quote Request — ${form.name}`,
          from_name: 'EzzyGo Website',
          name: form.name,
          phone: form.phone,
          message,
          botcheck: '',
        }),
      });
    } catch (_) {}

    try {
      await supabase.from('quotes').insert({
        name: form.name,
        phone: form.phone,
        pickup_address: form.from,
        dropoff_address: form.to,
        move_date: form.date || null,
        details: 'Homepage hero — quick quote request',
      });
    } catch (_) {}

    setSubmitted(true);
  };

  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: '100svh' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        .h-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          line-height: 0.88;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .h-headline .accent { color: #f97316; }

        .h-body {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
        }

        .h-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          line-height: 1;
          color: #f97316;
        }
        .h-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 10px;
          color: rgba(125,211,252,0.7);
          margin-top: 3px;
        }

        .h-badge {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 10.5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(249,115,22,0.12);
          border: 1.5px solid rgba(249,115,22,0.35);
          color: #fb923c;
          padding: 8px 18px;
          border-radius: 999px;
        }

        .h-trust-item {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .h-form-wrap {
          background: #1a1a1f;
          border-radius: 18px;
          padding: 26px 26px 20px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,115,22,0.06);
        }

        .h-form-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin-bottom: 3px;
        }
        .h-form-sub {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 18px;
        }

        .h-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 10.5px;
          color: rgba(255,255,255,0.4);
          display: block;
          margin-bottom: 5px;
        }

        .h-input {
          font-family: 'Barlow', sans-serif;
          width: 100%;
          padding: 10px 13px;
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          font-size: 14px;
          color: #ffffff;
          background: rgba(255,255,255,0.06);
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .h-input::placeholder { color: rgba(255,255,255,0.22); }
        .h-input:focus {
          border-color: #f97316;
          background: rgba(249,115,22,0.07);
          box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
        }
        .h-input[type="date"] { color-scheme: dark; }

        .h-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 17px;
          background: #f97316;
          color: white;
          border: none;
          border-radius: 11px;
          padding: 14px 24px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 6px 24px rgba(249,115,22,0.45);
          margin-top: 6px;
        }
        .h-btn:hover {
          background: #ea6c0a;
          transform: translateY(-1px);
          box-shadow: 0 10px 32px rgba(249,115,22,0.5);
        }

        .h-phone-link {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 13px;
          transition: color 0.2s;
        }
        .h-phone-link:hover { color: #7DD3FC; }

        /* ── LAYOUT ── */
        .hero-split {
          display: flex;
          min-height: 100svh;
        }

        .hero-left {
          width: 50%;
          max-width: 560px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 52px 80px 5vw;
          background: #111114;
        }

        .hero-right {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .hero-left::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.3) 30%, rgba(249,115,22,0.3) 70%, transparent);
        }

        .stat-divider {
          border-left: 1.5px solid rgba(255,255,255,0.1);
        }

        /* ── MOBILE ── */
        @media (max-width: 1023px) {
          .hero-split { flex-direction: column; }

          .hero-left {
            width: 100%;
            max-width: 100%;
            padding: 110px 20px 52px;
            align-items: center;
            text-align: center;
          }
          .hero-left::after { display: none; }
          .hero-right { min-height: 780px; }

          .h-badge { align-self: center !important; }
          .h-headline { text-align: center; width: 100%; }
          .h-body { text-align: center !important; max-width: 100% !important; }
          .hero-trust-row { justify-content: center !important; width: 100%; }
          .hero-stats-row { width: 100%; max-width: 400px; }
          .hero-mobile-cta { display: flex !important; justify-content: center; width: 100%; }
        }

        @media (max-width: 480px) {
          .hero-left { padding: 80px 16px 32px; }
          .h-badge { font-size: 10px; padding: 7px 16px; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <div className="hero-split">

        {/* LEFT */}
        <div className="hero-left">

          {/* Badge */}
          <motion.div
            className="h-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{ marginBottom: '28px', alignSelf: 'flex-start' }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#f97316', flexShrink: 0,
              animation: 'pulse 2s infinite', display: 'inline-block',
            }} />
            Operating across Queensland
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="h-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            style={{ fontSize: 'clamp(68px, 7.5vw, 112px)', marginBottom: '22px' }}
          >
            Moving<br />
            <span className="accent">Made</span><br />
            Easy.
          </motion.h1>

          {/* Body */}
          <motion.p
            className="h-body"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', maxWidth: '400px', marginBottom: '30px' }}
          >
            Affordable, reliable removalists across Brisbane, Gold Coast and all of QLD.
            Same-day bookings. Fixed quotes. Zero hidden fees.
          </motion.p>

          {/* Trust badges — Shield is blue (insurance = trust) */}
          <motion.div
            className="hero-trust-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '38px' }}
          >
            {trustBadges.map(({ icon: Icon, label, fill, blue }) => (
              <div key={label} className="h-trust-item">
                <Icon
                  size={14}
                  style={{
                    color: blue ? '#7DD3FC' : (fill ? '#f59e0b' : '#f97316'),
                    fill: fill ? '#f59e0b' : 'none',
                    flexShrink: 0,
                  }}
                />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            style={{
              display: 'flex',
              gap: 0,
              paddingTop: '26px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={i !== 0 ? 'stat-divider' : ''}
                style={{ flex: 1, paddingLeft: i === 0 ? 0 : '24px' }}
              >
                <div className="h-stat-num" style={{ fontSize: 'clamp(28px, 3.2vw, 46px)' }}>
                  {s.value}
                </div>
                <div className="h-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Mobile CTA */}
          <div className="hero-mobile-cta block lg:hidden" style={{ marginTop: '36px' }}>
            <a
              href="#quote"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '17px',
                background: '#f97316',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '11px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 24px rgba(249,115,22,0.45)',
              }}
            >
              Get Free Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="hero-right">
          <img
            src="/hero.png"
            alt="EzzyGo Removalists"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,14,0.72) 0%, rgba(10,10,14,0.45) 60%, rgba(10,10,14,0.3) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(17,17,20,0.6) 0%, transparent 22%)', pointerEvents: 'none' }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', overflowY: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              style={{ width: '100%', maxWidth: '390px' }}
            >
              <div className="h-form-wrap" id="quote">
                {!submitted ? (
                  <>
                    <div className="h-form-title">Get a Free Quote</div>
                    <div className="h-form-sub">We'll call you back within 15 minutes.</div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <label className="h-label">Your name</label>
                          <input className="h-input" type="text" placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                        </div>
                        <div>
                          <label className="h-label">Phone</label>
                          <input className="h-input" type="tel" placeholder="04XX XXX XXX" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                        </div>
                      </div>
                      <div>
                        <label className="h-label">Moving from</label>
                        <input className="h-input" type="text" placeholder="Suburb or postcode" value={form.from} onChange={e => setForm(f => ({ ...f, from: e.target.value }))} required />
                      </div>
                      <div>
                        <label className="h-label">Moving to</label>
                        <input className="h-input" type="text" placeholder="Suburb or postcode" value={form.to} onChange={e => setForm(f => ({ ...f, to: e.target.value }))} required />
                      </div>
                      <div>
                        <label className="h-label">Move date</label>
                        <input className="h-input" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                      </div>
                      <button type="submit" className="h-btn">
                        Get My Free Quote <ArrowRight size={17} />
                      </button>
                    </form>
                    <a href="tel:+61481356811" className="h-phone-link">
                      <Phone size={13} style={{ color: '#7DD3FC' }} /> Or call: +61 481 356 811
                    </a>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '28px 0' }}
                  >
                    <CheckCircle2 size={44} style={{ color: '#f97316', margin: '0 auto 14px' }} />
                    <div className="h-form-title">We'll be in touch!</div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
                      Expect a call within 15 minutes.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Review snippet */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                style={{
                  marginTop: '14px',
                  background: 'rgba(20,20,24,0.88)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '14px',
                  padding: '13px 15px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '11px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'white', fontSize: '16px',
                }}>M</div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                  </div>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.45, margin: 0 }}>
                    "On time, careful with everything, and cheaper than the quote."
                  </p>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    — Marcus J.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}