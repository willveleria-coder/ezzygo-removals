'use client';

import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, ShieldCheck, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Reliable & on time',
    desc: 'We arrive on schedule. Dependable service from start to finish.',
  },
  {
    icon: Users,
    title: 'Friendly pros',
    desc: 'Polite, careful movers completely focused on your move.',
  },
  {
    icon: DollarSign,
    title: 'Affordable rates',
    desc: 'Fixed quotes, competitive pricing. No surprises ever.',
  },
  {
    icon: ShieldCheck,
    title: 'Careful protection',
    desc: 'Every item handled with care to prevent damage.',
  },
];

const bullets = [
  'Same-day bookings available',
  'Fully insured on every job',
  'Fixed quotes — no hidden fees',
  'Operating across all of QLD',
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden"
      style={{ background: '#111110' }}
    >
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

      {/* Split layout: stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 580 }}>

        {/* ── LEFT: full-bleed image panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-1/2 lg:flex-shrink-0"
          style={{ minHeight: 300 }}
        >
          {/* Full bleed image */}
          <img
            src="/1.png"
            alt="EzzyGo removalists at work"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.88 }}
          />

          {/* Overlays: dark bottom, fade right on desktop to blend into content */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, transparent 60%, #111110 100%)',
            }}
          />

          {/* Caption bottom-left */}
          <div className="absolute bottom-0 left-0 p-6 lg:p-8">
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 4,
              }}
            >
              Operating across
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 30,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              All of Queensland
            </div>
          </div>

          {/* Badge: 4.9★ — sits on right edge, half overlapping content on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="absolute right-4 top-6 rounded-2xl px-4 py-3 lg:right-0 lg:top-10 lg:translate-x-1/2"
            style={{
              background: '#FF6B00',
              boxShadow: '0 16px 48px rgba(255,107,0,0.4)',
              minWidth: 116,
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 28,
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              4.9★
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.75)',
                marginTop: 3,
              }}
            >
              Avg. rating
            </div>
          </motion.div>

          {/* Badge: 2,400+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.44, duration: 0.45 }}
            className="absolute bottom-20 right-4 rounded-2xl px-4 py-3 lg:bottom-24 lg:right-0 lg:translate-x-1/2"
            style={{
              background: '#1a1a18',
              border: '1px solid rgba(255,255,255,0.1)',
              minWidth: 116,
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 28,
                fontWeight: 900,
                color: '#FF6B00',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              2,400+
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.35)',
                marginTop: 3,
              }}
            >
              Moves done
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: content ── */}
        <div
          className="relative flex flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-14 lg:py-16 xl:px-18"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 15%, rgba(255,107,0,0.07) 0%, transparent 55%)',
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#FF6B00',
            }}
          >
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
            02 / Why Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(38px, 3.8vw, 56px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: 14,
            }}
          >
            The team that
            <br />
            actually{' '}
            <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>shows up.</em>
          </motion.h2>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.13 }}
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.75,
              marginBottom: 18,
              maxWidth: 400,
            }}
          >
            EzzyGo Removals provides reliable moving services for homes, apartments,
            offices and furniture deliveries across Queensland — from the first box
            to the last.
          </motion.p>

          {/* Checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.17 }}
            className="mb-7 space-y-2"
            style={{ listStyle: 'none', padding: 0 }}
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle
                  size={15}
                  style={{ color: '#FF6B00', flexShrink: 0 }}
                  strokeWidth={2.2}
                />
                <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  {b}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Pillar cards 2×2 (1 col on small mobile) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                className="group rounded-2xl p-4 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,107,0,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,107,0,0.12)',
                    border: '1px solid rgba(255,107,0,0.2)',
                  }}
                >
                  <p.icon size={16} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#fff',
                    letterSpacing: '0.02em',
                    marginBottom: 4,
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>
                  {p.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}