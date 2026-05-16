'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Clock,
  Users,
  ShieldCheck,
  HeartHandshake,
  DollarSign,
  MapPin,
  CheckCircle,
} from 'lucide-react';

const stats = [
  { value: '2,400+', label: 'Moves completed' },
  { value: '4.9★', label: 'Average rating' },
  { value: '98%', label: 'On-time rate' },
  { value: '6 yrs', label: 'Operating' },
];

const values = [
  {
    icon: Clock,
    title: 'Show up on time',
    desc: "We arrive when we say we will. If we're running late, you'll know before we're late.",
  },
  {
    icon: ShieldCheck,
    title: 'Handle with care',
    desc: 'Every item wrapped, padded, and lifted with two hands. No shortcuts, no scrapes.',
  },
  {
    icon: DollarSign,
    title: 'No hidden fees',
    desc: 'The quote you get is the price you pay. GST, insurance, fuel, equipment — all in.',
  },
  {
    icon: HeartHandshake,
    title: 'Treat people right',
    desc: 'Moving day is stressful enough. Our job is to make it easier, not add to it.',
  },
];

const bullets = [
  'Local Queensland crews (no contractors)',
  'Fully insured on every job',
  'Same-day bookings often available',
  'Fixed quotes — no surprises',
  'Background-checked, uniformed movers',
  'Trolleys, blankets, straps included',
];

export default function AboutContent() {
  return (
    <>
      {/* ── STORY SECTION ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(255,107,0,0.04) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: copy */}
            <div className="lg:col-span-7">
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
                Our story
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                  marginBottom: 22,
                }}
              >
                Removalists{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  done differently.
                </em>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="space-y-5"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 16.5,
                  color: '#555',
                  lineHeight: 1.75,
                  maxWidth: 580,
                }}
              >
                <p>
                  EzzyGo started for a simple reason: we got sick of bad
                  removalists. The ones that show up late, quote one price and
                  charge another, and treat your stuff like it&apos;s
                  someone else&apos;s problem.
                </p>
                <p>
                  So we built a crew that does the opposite. Local Queensland
                  movers who show up on time, give fixed quotes, handle your
                  stuff with the same care they&apos;d give their own — and
                  charge a fair hourly rate with everything included.
                </p>
                <p>
                  Six years and 2,400+ moves later, we run trucks across
                  Brisbane, the Gold Coast, the Sunshine Coast, Ipswich, Logan
                  and everywhere between. Whether you&apos;re moving a single
                  couch or a five-bedroom family home, the promise is the
                  same: stress-free, on time, no surprises.
                </p>
              </motion.div>

              {/* Bullets */}
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
                style={{ listStyle: 'none', padding: 0 }}
              >
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle
                      size={17}
                      style={{ color: '#0EA5E9', flexShrink: 0 }}
                      strokeWidth={2.2}
                    />
                    <span style={{ fontSize: 14, color: '#444', lineHeight: 1.5 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div
                className="relative overflow-hidden rounded-[24px]"
                style={{
                  aspectRatio: '4/5',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <img
                  src="/1.png"
                  alt="EzzyGo Removalist crew at work"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: 0.95 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                  }}
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'rgba(255,255,255,0.55)',
                      marginBottom: 5,
                    }}
                  >
                    Operating across
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 32,
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: '#fff',
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                    }}
                  >
                    All of Queensland
                  </div>
                </div>
                {/* Badge */}
                <div
                  className="absolute right-5 top-5 rounded-2xl px-4 py-3"
                  style={{
                    background: '#FF6B00',
                    boxShadow: '0 12px 36px rgba(255,107,0,0.4)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 28,
                      fontWeight: 900,
                      color: '#fff',
                      lineHeight: 1,
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
                      color: 'rgba(255,255,255,0.8)',
                      marginTop: 3,
                    }}
                  >
                    Avg. rating
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#111110' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,107,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,107,0,0.06) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {stats.map((s, i) => {
              // Alternate: stat 0,2 orange; stat 1,3 blue
              const blue = i === 1 || i === 3;
              return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    fontWeight: 900,
                    color: blue ? '#7DD3FC' : '#FF6B00',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: 8,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
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
                What we stand for
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                Four rules
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  we never break.
                </em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              style={{ fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 420 }}
            >
              We&apos;ve built EzzyGo on a few simple promises. They sound
              obvious, but they&apos;re what separates a good move from a bad
              one.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => {
              const blue = i === 0 || i === 1; // on-time + handle-with-care = trust
              const accent = blue ? '#0EA5E9' : '#FF6B00';
              const tintBg = blue ? 'rgba(125,211,252,0.10)' : 'rgba(255,107,0,0.08)';
              const tintBorder = blue ? 'rgba(125,211,252,0.25)' : 'rgba(255,107,0,0.18)';
              const hoverBg = blue ? '#F0F9FF' : '#FFF7F0';
              const hoverBorder = blue ? 'rgba(125,211,252,0.4)' : 'rgba(255,107,0,0.3)';
              const hoverShadow = blue ? '0 16px 40px rgba(125,211,252,0.18)' : '0 16px 40px rgba(255,107,0,0.10)';
              return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[20px] p-7 transition-all duration-300"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hoverBg;
                  e.currentTarget.style.borderColor = hoverBorder;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = hoverShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                  style={{
                    background: tintBg,
                    border: `1px solid ${tintBorder}`,
                  }}
                >
                  <v.icon size={20} style={{ color: accent }} strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.02em',
                    marginBottom: 8,
                    lineHeight: 1.1,
                  }}
                >
                  {v.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 14.5,
                    color: '#666',
                    lineHeight: 1.65,
                  }}
                >
                  {v.desc}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] p-8 lg:p-12"
            style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div
                  className="mb-4 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#FF6B00',
                  }}
                >
                  <MapPin size={12} />
                  Where we operate
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#111',
                  }}
                >
                  Daily runs across{' '}
                  <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                    SEQ.
                  </em>
                </h3>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 15,
                    color: '#666',
                    lineHeight: 1.7,
                    maxWidth: 460,
                  }}
                >
                  We run trucks every day across the five biggest markets in
                  South East Queensland. Same hourly rate, same crew, same
                  promise — wherever you&apos;re moving.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Ipswich', 'Logan'].map(
                  (city) => (
                    <a
                      key={city}
                      href={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 transition-all duration-200"
                      style={{
                        background: '#F5F4F1',
                        border: '1px solid rgba(0,0,0,0.06)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,107,0,0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F5F4F1';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: '#111',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {city}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          color: '#FF6B00',
                          fontWeight: 700,
                        }}
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}