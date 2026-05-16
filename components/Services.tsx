'use client';

import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  Home,
  Briefcase,
  Sofa,
  Warehouse,
  MapPinned,
  Clock,
  ShieldCheck,
  Award,
  HeartHandshake,
} from 'lucide-react';

const services = [
  {
    n: '01',
    icon: Package,
    title: 'Packing service',
    desc: "Premium materials, efficient packing. We treat your stuff like it's ours.",
    duration: '2 hr',
    from: '$249',
  },
  {
    n: '02',
    icon: Truck,
    title: 'Loading & unloading',
    desc: 'Safe transport of household items. Trained crew, padded everything.',
    duration: '1.5 hr',
    from: '$199',
  },
  {
    n: '03',
    icon: Home,
    title: 'Full service move',
    desc: 'Door-to-door white-glove service. Pack, transport, unpack, done.',
    duration: '4 hr',
    from: '$899',
  },
  {
    n: '04',
    icon: Sofa,
    title: 'Furniture transport',
    desc: 'Single items or whole loads. Handled with care every step of the way.',
    duration: '2 hr',
    from: '$169',
  },
  {
    n: '05',
    icon: Warehouse,
    title: 'Storage solutions',
    desc: 'Secure short and long-term storage. Flexible plans, climate-safe.',
    duration: '1 hr',
    from: '$45/wk',
  },
  {
    n: '06',
    icon: MapPinned,
    title: 'Interstate moves',
    desc: "Crossing state lines? We'll get you there safely, on time, in one piece.",
    duration: '6 hr+',
    from: '$2,499',
  },
  {
    n: '07',
    icon: Clock,
    title: 'Same-day moves',
    desc: "Urgent? No worries. Subject to availability, we'll be there today.",
    duration: '4 hr',
    from: '$249',
  },
  {
    n: '08',
    icon: Briefcase,
    title: 'Office relocations',
    desc: 'Move your business with zero downtime. After-hours and weekends welcome.',
    duration: '1 hr+',
    from: '$499',
  },
];

const marqueeItems = [
  'Brisbane',
  'Gold Coast',
  'Sunshine Coast',
  'Ipswich',
  'Logan',
  'Toowoomba',
  'Cairns',
  'Townsville',
  'Mackay',
  'Rockhampton',
  'Bundaberg',
];

// Trust bar: insurance + no-pressure are blue (trust signals), award stays orange (badge/brand)
const trustBar = [
  {
    icon: ShieldCheck,
    title: 'Fully insured',
    desc: 'Goods-in-transit cover on every move.',
    blue: true,
  },
  {
    icon: Award,
    title: 'Vetted crew',
    desc: 'Trained, uniformed, background-checked.',
    blue: false,
  },
  {
    icon: HeartHandshake,
    title: 'No-pressure quotes',
    desc: 'Fixed pricing. No hidden fees. Ever.',
    blue: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(255,107,0,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(125,211,252,0.04) 0%, transparent 50%)',
        }}
      />

      {/* ── Marquee ── */}
      <div
        className="relative overflow-hidden py-[18px]"
        style={{
          borderTop: '1px solid rgba(0,0,0,0.09)',
          borderBottom: '1px solid rgba(0,0,0,0.09)',
          background: '#EEEDE9',
        }}
        aria-hidden="true"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32"
          style={{ background: 'linear-gradient(to right,#EEEDE9,transparent)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32"
          style={{ background: 'linear-gradient(to left,#EEEDE9,transparent)' }}
        />

        <div className="flex w-max" style={{ animation: 'ezMarquee 28s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 whitespace-nowrap px-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  fontStyle: 'italic',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'rgba(0,0,0,0.25)',
                }}
              >
                <span>{item}</span>
                <span style={{ color: '#FF6B00', fontSize: 10, lineHeight: 1 }}>●</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
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
              01 / Services
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(48px, 5vw, 72px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Everything you need
              <br />
              to <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>move</em>.
              <br />
              Nothing you don&apos;t.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 17, color: '#555', lineHeight: 1.65, maxWidth: 380 }}
          >
            From a single armchair across town to a five-bedroom interstate
            relocation — book any service in under a minute.
          </motion.p>
        </div>

        <div className="mb-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              href="#quote"
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group relative block cursor-pointer overflow-hidden rounded-[20px] p-6"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                textDecoration: 'none',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.015)';
                e.currentTarget.style.boxShadow = '0 24px 56px rgba(255,107,0,0.13), 0 4px 16px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.45)';
                e.currentTarget.style.background = 'rgba(255,247,240,1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                e.currentTarget.style.background = '#fff';
              }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)',
                }}
              />

              <div className="mb-5 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,107,0,0.08)',
                    border: '1px solid rgba(255,107,0,0.18)',
                  }}
                >
                  <s.icon size={20} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: 'rgba(0,0,0,0.2)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {s.n}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#111',
                  letterSpacing: '0.01em',
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {s.title}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#777',
                  lineHeight: 1.6,
                  minHeight: 52,
                  marginBottom: 18,
                }}
              >
                {s.desc}
              </p>

              <div
                className="flex items-end justify-between pt-3"
                style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#aaa',
                      marginBottom: 3,
                    }}
                  >
                    From
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 28,
                      fontWeight: 800,
                      color: '#FF6B00',
                      lineHeight: 1,
                    }}
                  >
                    {s.from}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: '#aaa',
                    letterSpacing: '0.1em',
                  }}
                >
                  {s.duration}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust bar — blue accents on insurance + no-pressure quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 grid gap-4 rounded-[20px] grid-cols-1 sm:grid-cols-3 sm:gap-0"
          style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.07)',
            padding: '24px',
          }}
        >
          {trustBar.map((f, i) => {
            const tint = f.blue ? 'rgba(125,211,252,0.10)' : 'rgba(255,107,0,0.07)';
            const tintBorder = f.blue ? 'rgba(125,211,252,0.25)' : 'rgba(255,107,0,0.15)';
            const iconColor = f.blue ? '#0EA5E9' : '#FF6B00';
            return (
              <div
                key={f.title}
                className="flex items-start gap-3 min-w-0 sm:gap-4 sm:pl-6 sm:first:pl-0 sm:border-l sm:first:border-l-0"
                style={{
                  borderLeftColor: 'rgba(0,0,0,0.07)',
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: tint,
                    border: `1px solid ${tintBorder}`,
                  }}
                >
                  <f.icon size={20} style={{ color: iconColor }} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 18,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#111',
                      letterSpacing: '0.02em',
                      marginBottom: 4,
                    }}
                  >
                    {f.title}
                  </div>
                  <div style={{ fontSize: 13, color: '#777', lineHeight: 1.5 }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @keyframes ezMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}