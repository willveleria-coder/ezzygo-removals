'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  Home,
  Package,
  Sofa,
  Anchor,
  Box,
  Check,
  ArrowRight,
  Phone,
} from 'lucide-react';

const hourly = [
  {
    name: '2 Men + Truck',
    price: 149,
    desc: 'Perfect for small to medium local moves.',
    tag: null,
    features: ['Up to 3 bedrooms', '6-tonne truck', 'Trolleys & blankets', 'GST + insurance'],
    icon: Truck,
  },
  {
    name: '3 Men + Truck',
    price: 189,
    desc: 'Best for larger homes and faster loading.',
    tag: 'Most booked',
    features: ['Up to 5 bedrooms', '8-tonne truck', 'Priority booking', 'Disassembly help', 'Premium equipment'],
    icon: Truck,
  },
];

const fixedPrices = [
  { icon: Home,    label: 'Small Moves',          from: '$250', desc: 'Quick moves for small loads and short trips.' },
  { icon: Home,    label: '1 Bedroom',             from: '$350', desc: 'Affordable option for units and apartments.' },
  { icon: Home,    label: '2 Bedroom',             from: '$550', desc: 'Reliable moving for small family homes.' },
  { icon: Home,    label: '3 Bedroom',             from: '$850', desc: 'Ideal for larger household relocations.' },
  { icon: Anchor,  label: 'Pool Table Moves',      from: '$350', desc: 'Heavy item handling with extra care.' },
  { icon: Box,     label: 'Single Item Delivery',  from: '$120', desc: 'Furniture delivery and marketplace pickups.' },
];

const guarantees = [
  'Prices may vary on access, stairs, distance & volume',
  'Fixed quotes available on request',
  'No hidden fees. Ever.',
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(255,107,0,0.06) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-2">
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
              04 / Pricing
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(44px, 4.5vw, 68px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Simple &amp; transparent
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>pricing.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 380 }}
          >
            Competitive rates with no hidden fees. Affordable removalists in Brisbane,
            Gold Coast and across Queensland.
          </motion.p>
        </div>

        {/* ── Hourly rates ── */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          {hourly.map((tier, i) => {
            const isHot = tier.tag !== null;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[24px] p-7 lg:p-9"
                style={{
                  background: isHot ? '#111110' : '#fff',
                  border: isHot ? '1px solid rgba(255,107,0,0.25)' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: isHot ? '0 32px 80px rgba(255,107,0,0.18)' : 'none',
                }}
              >
                {/* Glow blob for hot card */}
                {isHot && (
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.22), transparent 70%)' }}
                  />
                )}

                {/* Tag */}
                {tier.tag && (
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                      style={{
                        background: '#FF6B00',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.22em',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ✦ {tier.tag}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: isHot ? 'rgba(255,107,0,0.14)' : 'rgba(255,107,0,0.08)',
                    border: `1px solid rgba(255,107,0,${isHot ? '0.3' : '0.18'})`,
                  }}
                >
                  <tier.icon size={20} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                </div>

                {/* Name + desc */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.01em',
                    color: isHot ? '#fff' : '#111',
                    lineHeight: 1.05,
                    marginBottom: 6,
                  }}
                >
                  {tier.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: isHot ? 'rgba(255,255,255,0.45)' : '#888',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {tier.desc}
                </div>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(52px, 6vw, 72px)',
                      fontWeight: 900,
                      color: '#FF6B00',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    ${tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      color: isHot ? 'rgba(255,255,255,0.35)' : '#aaa',
                      letterSpacing: '0.08em',
                    }}
                  >
                    /hr
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)' }}
                      >
                        <Check size={10} style={{ color: '#FF6B00' }} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13, color: isHot ? 'rgba(255,255,255,0.6)' : '#555' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#quote"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] py-3.5 transition-all duration-200"
                  style={{
                    background: isHot ? '#FF6B00' : 'rgba(0,0,0,0.05)',
                    border: isHot ? 'none' : '1px solid rgba(0,0,0,0.1)',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isHot ? '#fff' : '#111',
                    textDecoration: 'none',
                    boxShadow: isHot ? '0 8px 28px rgba(255,107,0,0.35)' : 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.opacity = '0.88';
                    el.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  Get started <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ── Fixed price grid ── */}
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {fixedPrices.map((item, i) => (
            <motion.a
              key={item.label}
              href="#quote"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group block rounded-[20px] p-5 transition-all duration-300"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,107,0,0.4)';
                el.style.background = 'rgba(255,247,240,1)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 16px 40px rgba(255,107,0,0.12)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,0,0,0.07)';
                el.style.background = '#fff';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Icon circle */}
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: 'rgba(255,107,0,0.08)',
                  border: '1px solid rgba(255,107,0,0.18)',
                }}
              >
                <item.icon size={18} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#111',
                  letterSpacing: '0.01em',
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                {item.label}
              </div>

              {/* Desc */}
              <p style={{ fontSize: 11.5, color: '#999', lineHeight: 1.55, marginBottom: 14 }}>
                {item.desc}
              </p>

              {/* Price */}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: 12 }}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#bbb',
                    marginBottom: 3,
                  }}
                >
                  From
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 26,
                    fontWeight: 900,
                    color: '#FF6B00',
                    lineHeight: 1,
                  }}
                >
                  {item.from}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Guarantees bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 grid gap-3 sm:grid-cols-3"
        >
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-[16px] px-5 py-4"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <div
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)' }}
              >
                <Check size={10} style={{ color: '#FF6B00' }} strokeWidth={3} />
              </div>
              <span style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>{g}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 rounded-[20px] px-7 py-6 sm:flex-row"
          style={{
            background: '#111110',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}
            >
              Not sure which option?{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>We'll figure it out.</em>
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
                marginTop: 5,
                textTransform: 'uppercase',
              }}
            >
              Call us — we'll give you a fixed quote in 2 minutes.
            </div>
          </div>

          <div className="flex shrink-0 gap-3 w-full sm:w-auto flex-col sm:flex-row">
            <a
              href="#quote"
              className="flex items-center gap-2 rounded-[12px] px-6 py-3.5 transition-all duration-200"
              style={{
                background: '#FF6B00',
fontFamily: "'Barlow Condensed', sans-serif",
fontSize: 15,
fontWeight: 800,
textTransform: 'uppercase',
letterSpacing: '0.07em',
color: '#fff',
textDecoration: 'none',
boxShadow: '0 8px 28px rgba(255,107,0,0.35)',
whiteSpace: 'nowrap',
flex: 1,
justifyContent: 'center',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#e55f00';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Request Fixed Quote <ArrowRight size={14} />
            </a>
            <a
              href="tel:+61481356811"
              className="flex items-center gap-2 rounded-[12px] px-6 py-3.5 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 15,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: '#fff',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flex: 1,
                justifyContent: 'center',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
              }}
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}