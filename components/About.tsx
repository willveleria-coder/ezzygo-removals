'use client';

import { motion } from 'framer-motion';
import { Clock, Users, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Reliable & on time',
    desc: 'We arrive on schedule. Dependable service from start to finish, every single move.',
    blue: true,
  },
  {
    icon: Users,
    title: 'Friendly pros',
    desc: 'Our trained movers are polite, careful, and completely focused on your move.',
    blue: false,
  },
  {
    icon: DollarSign,
    title: 'Affordable rates',
    desc: 'Competitive pricing with clear fixed quotes. No surprises, no hidden fees.',
    blue: false,
  },
  {
    icon: ShieldCheck,
    title: 'Careful protection',
    desc: 'Furniture, boxes, and belongings handled with care to prevent damage.',
    blue: true,
  },
];

const stats = [
  { value: '4.9★', label: 'Avg. rating', blue: false },
  { value: '2,400+', label: 'Moves done', blue: false },
  { value: '98%', label: 'On-time rate', blue: true },
  { value: '100%', label: 'Insured', blue: true },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      {/* ── FULL-BLEED IMAGE BLOCK ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div
          className="mb-6 flex items-center gap-2"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#FF6B00',
          }}
        >
          <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
          05 / About
        </div>

        <div
          className="relative w-full overflow-hidden rounded-[28px] lg:rounded-[36px]"
          style={{
            aspectRatio: '16/7',
            border: '1px solid rgba(0,0,0,0.08)',
            minHeight: 320,
          }}
        >
          <img
            src="/2.png"
            alt="EzzyGo Removals team in action"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.08) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(42px, 6vw, 96px)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#fff',
                maxWidth: 680,
              }}
            >
              We make
              <br />
              moving feel
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>effortless.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.55 }}
              style={{
                fontSize: 'clamp(13px, 1.4vw, 16px)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: 440,
                marginTop: 20,
              }}
            >
              Reliable moving services for homes, apartments, offices and furniture
              deliveries across Queensland — from the first box to the last.
            </motion.p>
          </div>

          {/* Stat badges — On-time now blue */}
          <div className="absolute bottom-5 right-5 flex gap-2 lg:bottom-8 lg:right-8 lg:gap-3">
            {[
              { val: '4.9★', label: 'Rating', variant: 'light' },
              { val: '98%', label: 'On-time', variant: 'blue' },
            ].map((b) => (
              <motion.div
                key={b.val}
                initial={{ opacity: 0, y: 14, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.45 }}
                className="rounded-2xl px-4 py-3 lg:px-5 lg:py-4"
                style={{
                  background:
                    b.variant === 'blue' ? 'rgba(125,211,252,0.95)' : 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  minWidth: 90,
                  boxShadow:
                    b.variant === 'blue'
                      ? '0 16px 48px rgba(125,211,252,0.45)'
                      : '0 16px 48px rgba(0,0,0,0.22)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 900,
                    color: b.variant === 'blue' ? '#0C4A6E' : '#FF6B00',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {b.val}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: b.variant === 'blue' ? 'rgba(12,74,110,0.65)' : '#aaa',
                    marginTop: 3,
                  }}
                >
                  {b.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── CONTENT BELOW IMAGE ── */}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">

        {/* Stats strip — last 2 cards are blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-[20px] px-6 py-5"
              style={{
                background: i === 1 ? '#111110' : '#fff',
                border:
                  i === 1
                    ? '1px solid rgba(255,107,0,0.2)'
                    : s.blue
                    ? '1px solid rgba(125,211,252,0.35)'
                    : '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 900,
                  color: s.blue ? '#0EA5E9' : '#FF6B00',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: i === 1 ? 'rgba(255,255,255,0.4)' : '#aaa',
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Body + pillars */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginBottom: 16 }}
            >
              EzzyGo Removals provides reliable moving services for homes, apartments,
              offices and furniture deliveries across Queensland. Our experienced team
              handles every move with care, safety and efficiency — from the first box
              to the last.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 32 }}
            >
              Whether you need local removalists, packing help, furniture moving or a
              complete relocation — we make your move simple, smooth and stress-free.
            </motion.p>

            <motion.a
              href="#quote"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="inline-flex items-center gap-2 rounded-[14px] px-7 py-4 transition-all duration-200"
              style={{
                background: '#FF6B00',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 16,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(255,107,0,0.32)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#e55f00';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(255,107,0,0.42)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(255,107,0,0.32)';
              }}
            >
              Get a free quote <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* Pillars — reliability + protection in blue, friendly + affordable in orange */}
          <div className="grid grid-cols-2 gap-3">
            {pillars.map((p, i) => {
              const accentColor = p.blue ? '#0EA5E9' : '#FF6B00';
              const tintBg = p.blue ? 'rgba(125,211,252,0.10)' : 'rgba(255,107,0,0.08)';
              const tintBorder = p.blue ? 'rgba(125,211,252,0.22)' : 'rgba(255,107,0,0.16)';
              const hoverBg = p.blue ? 'rgba(224,242,254,0.5)' : 'rgba(255,247,240,1)';
              const hoverBorder = p.blue ? 'rgba(125,211,252,0.4)' : 'rgba(255,107,0,0.35)';
              const hoverShadow = p.blue ? '0 14px 36px rgba(125,211,252,0.18)' : '0 14px 36px rgba(255,107,0,0.11)';
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                  className="group rounded-[20px] p-5 transition-all duration-300"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.07)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = hoverBorder;
                    e.currentTarget.style.background = hoverBg;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = hoverShadow;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: tintBg,
                      border: `1px solid ${tintBorder}`,
                    }}
                  >
                    <p.icon size={18} style={{ color: accentColor }} strokeWidth={1.8} />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 17,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#111',
                      letterSpacing: '0.02em',
                      marginBottom: 6,
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </div>
                  <div style={{ fontSize: 12.5, color: '#777', lineHeight: 1.6 }}>
                    {p.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}