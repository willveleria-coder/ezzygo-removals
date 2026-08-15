'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Truck,
  Shield,
  Check,
  ArrowRight,
  Phone,
  Sparkles,
  Home,
  Briefcase,
  Sofa,
  Package,
  Warehouse,
  MapPinned,
  Zap,
  Piano,
  Cat,
  Ruler,
  Route,
  DoorOpen,
  CalendarDays,
  Boxes,
} from 'lucide-react';

const crewTiers = [
  {
    movers: 2,
    label: '2 movers + truck',
    desc: 'Ideal for studio, 1BR & 2BR moves',
    feature: 'Most common',
    blue: false,
  },
  {
    movers: 3,
    label: '3 movers + truck',
    desc: 'Best for 3BR homes & small offices',
    feature: 'Recommended for 3BR',
    blue: true,
  },
  {
    movers: 4,
    label: '4 movers + large truck',
    desc: '4+ BR, large offices, time-critical jobs',
    feature: 'Fastest option',
    blue: false,
  },
];

const services = [
  { icon: Sofa,      title: 'Furniture transport', sub: 'Single items or a full load' },
  { icon: Truck,     title: 'Loading & unloading', sub: 'You supply the truck' },
  { icon: Home,      title: 'Local Brisbane moves', sub: 'Suburb to suburb' },
  { icon: Package,   title: 'Packing service',      sub: 'We pack, you relax' },
  { icon: Zap,       title: 'Same-day moves',       sub: 'Subject to availability' },
  { icon: Briefcase, title: 'Office relocations',   sub: 'After-hours available' },
  { icon: Home,      title: 'Home removals',        sub: 'Studio through to 5BR' },
  { icon: Sparkles,  title: 'Full service move',    sub: 'Pack, move, unpack' },
  { icon: Warehouse, title: 'Storage solutions',    sub: 'Short or long term' },
  { icon: MapPinned, title: 'Interstate moves',     sub: 'QLD to anywhere' },
];

const quoteFactors = [
  {
    icon: Ruler,
    title: 'Size of the move',
    desc: 'How many bedrooms, and how full they are. A packed 2BR can be bigger than a sparse 3BR.',
  },
  {
    icon: Route,
    title: 'Distance',
    desc: 'Pickup to drop-off, plus how far our crew travels to reach you.',
  },
  {
    icon: DoorOpen,
    title: 'Access at both ends',
    desc: 'Stairs, lifts, narrow driveways, long carries and parking all change how long a job takes.',
  },
  {
    icon: CalendarDays,
    title: 'Date & timing',
    desc: 'Weekends, end of month and same-day jobs are in higher demand than a mid-week morning.',
  },
  {
    icon: Boxes,
    title: 'Packing & materials',
    desc: 'Whether you pack yourself or we handle it, and how many boxes you need from us.',
  },
  {
    icon: Piano,
    title: 'Specialty items',
    desc: 'Pianos, pool tables, safes and anything needing extra crew or gear.',
  },
];

const packingBundles = [
  { name: 'Small',  subtitle: 'Studio / 1BR' },
  { name: 'Medium', subtitle: '2 Bedroom' },
  { name: 'Large',  subtitle: '3 Bedroom' },
  { name: 'XL',     subtitle: '4+ Bedroom' },
];

const specialtyItems = [
  { icon: Piano,   title: 'Piano',       sub: 'Upright & grand' },
  { icon: Package, title: 'Pool table',  sub: 'Disassembly included' },
  { icon: Shield,  title: 'Safes & gym gear', sub: 'Extra crew as needed' },
  { icon: Cat,     title: 'Pet transport', sub: 'Within QLD only' },
];

const alwaysIncluded = [
  'GST',
  'Public liability insurance',
  'Goods-in-transit insurance',
  'Furniture blankets, trolleys & straps',
  'Basic wrapping',
  'Travel time between properties',
  'Reasonable stair work',
];

export default function PricingContent() {
  return (
    <>
      {/* ────────── HOW IT WORKS / CREW SIZES ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 25%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 88% 75%, rgba(125,211,252,0.05) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          {/* Header */}
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
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
                ─── 01 / How it works
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(40px, 4.5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                One quote.
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  Nothing hidden.
                </em>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="lg:col-span-5"
            >
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 16,
                  color: '#666',
                  lineHeight: 1.7,
                  maxWidth: 460,
                }}
              >
                Tell us what you&apos;re moving and we&apos;ll come back with a fixed
                price for the job — GST, insurance, fuel, blankets and equipment all
                included. The number we give you is the number you pay.
              </p>

              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: 'rgba(125,211,252,0.10)',
                  border: '1px solid rgba(125,211,252,0.28)',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#0EA5E9',
                  fontWeight: 700,
                }}
              >
                <Shield size={11} />
                Free quote · No obligation · Usually within the hour
              </div>
            </motion.div>
          </div>

          {/* Crew size cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {crewTiers.map((tier, i) => {
              const isBlue = tier.blue;
              return (
                <motion.div
                  key={tier.movers}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative overflow-hidden rounded-[24px] p-7 lg:p-8"
                  style={{
                    background: isBlue ? '#0d0d0c' : '#fff',
                    border: isBlue
                      ? '1px solid rgba(125,211,252,0.3)'
                      : '1px solid rgba(0,0,0,0.07)',
                    color: isBlue ? '#fff' : '#111',
                  }}
                >
                  {isBlue && (
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(125,211,252,0.2), transparent 70%)',
                      }}
                    />
                  )}

                  <div className="relative">
                    {/* Feature pill */}
                    <div
                      className="mb-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                      style={{
                        background: isBlue
                          ? 'rgba(125,211,252,0.15)'
                          : 'rgba(255,107,0,0.08)',
                        border: isBlue
                          ? '1px solid rgba(125,211,252,0.35)'
                          : '1px solid rgba(255,107,0,0.18)',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: isBlue ? '#7DD3FC' : '#FF6B00',
                        fontWeight: 700,
                      }}
                    >
                      <Sparkles size={9} />
                      {tier.feature}
                    </div>

                    {/* Crew label */}
                    <div className="mb-3 flex items-center gap-3">
                      <Users
                        size={22}
                        style={{ color: isBlue ? '#7DD3FC' : '#FF6B00' }}
                        strokeWidth={1.8}
                      />
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 17,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: isBlue ? '#fff' : '#111',
                        }}
                      >
                        {tier.label}
                      </div>
                    </div>

                    {/* Big crew number */}
                    <div className="mb-2 flex items-baseline gap-2">
                      <span
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 72,
                          fontWeight: 900,
                          color: isBlue ? '#7DD3FC' : '#FF6B00',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {tier.movers}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 12,
                          color: isBlue ? 'rgba(255,255,255,0.4)' : '#888',
                          letterSpacing: '0.1em',
                        }}
                      >
                        movers
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: 13.5,
                        color: isBlue ? 'rgba(255,255,255,0.55)' : '#777',
                        lineHeight: 1.6,
                        marginBottom: 24,
                      }}
                    >
                      {tier.desc}
                    </p>

                    <Link
                      href="/book"
                      className="flex w-full items-center justify-center gap-2 rounded-[12px] py-3.5 transition-all duration-200"
                      style={{
                        background: '#FF6B00',
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#fff',
                        textDecoration: 'none',
                        boxShadow: '0 6px 22px rgba(255,107,0,0.32)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(255,107,0,0.45)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(255,107,0,0.32)';
                      }}
                    >
                      Get a quote
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────── SERVICES WE QUOTE ON ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#fff' }}
      >
        <div style={{ height: 1, background: 'rgba(0,0,0,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
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
                ─── 02 / What we quote on
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(40px, 4.5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                Every job,
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  priced properly.
                </em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="lg:col-span-5"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16,
                color: '#666',
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              Whatever you need shifted, we&apos;ll quote it. One phone call or a
              two-minute form is all it takes — and there&apos;s no obligation to
              book once you&apos;ve got the number.
            </motion.p>
          </div>

          {/* Service cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="rounded-[16px] p-5 transition-all duration-200"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,107,0,0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(255,107,0,0.08)',
                    border: '1px solid rgba(255,107,0,0.18)',
                  }}
                >
                  <s.icon size={16} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                    marginBottom: 8,
                    minHeight: 36,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 13,
                    color: '#777',
                    lineHeight: 1.5,
                  }}
                >
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── WHAT SHAPES YOUR QUOTE ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
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
                ─── 03 / What shapes your quote
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(40px, 4.5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                No two moves
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  are the same.
                </em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="lg:col-span-5"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16,
                color: '#666',
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              A price off the top of our head would just be a guess — and guesses are
              how people end up with a bill bigger than the quote. Here&apos;s what we
              actually look at. Mention these when you get in touch and we&apos;ll have
              your number back faster.
            </motion.p>
          </div>

          {/* Factor rows */}
          <div
            className="overflow-hidden rounded-[24px]"
            style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            {quoteFactors.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 px-6 py-5 lg:gap-6 lg:px-8 lg:py-6"
                style={{
                  borderTop: i > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(125,211,252,0.10)',
                    border: '1px solid rgba(125,211,252,0.25)',
                  }}
                >
                  <f.icon size={17} style={{ color: '#0EA5E9' }} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 20,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#111',
                      letterSpacing: '0.02em',
                      lineHeight: 1.15,
                      marginBottom: 5,
                    }}
                  >
                    {f.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 14.5,
                      color: '#666',
                      lineHeight: 1.6,
                      maxWidth: 640,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── PACKING BUNDLES + SPECIALTY ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#fff' }}
      >
        <div style={{ height: 1, background: 'rgba(0,0,0,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Packing bundles */}
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
                <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
                ─── 04 / Packing materials
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                Materials <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>bundles.</em>
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Boxes, paper, tape, bubble wrap — everything you need to pack yourself.
                Add a bundle to your quote and we&apos;ll drop it off before the move.
              </p>

              <div className="space-y-2">
                {packingBundles.map((b, i) => (
                  <motion.div
                    key={b.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-[14px] px-5 py-4"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 17,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: '#111',
                          letterSpacing: '0.02em',
                          lineHeight: 1,
                        }}
                      >
                        {b.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          color: '#0EA5E9',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          marginTop: 4,
                          fontWeight: 700,
                        }}
                      >
                        {b.subtitle}
                      </div>
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{
                        background: 'rgba(255,107,0,0.08)',
                        border: '1px solid rgba(255,107,0,0.18)',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#FF6B00',
                        fontWeight: 700,
                      }}
                    >
                      Add to quote
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialty items */}
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
                <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
                ─── 05 / Specialty items
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                Heavy <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>or unusual.</em>
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Items that need extra crew, gear, or experience. Tell us what
                you&apos;ve got and we&apos;ll build it into the quote.
              </p>

              <div className="space-y-2">
                {specialtyItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-[14px] px-5 py-4"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: 'rgba(125,211,252,0.10)',
                          border: '1px solid rgba(125,211,252,0.25)',
                        }}
                      >
                        <item.icon size={14} style={{ color: '#0EA5E9' }} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: 16,
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            color: '#111',
                            letterSpacing: '0.02em',
                            lineHeight: 1.1,
                          }}
                        >
                          {item.title}
                        </div>
                        {item.sub && (
                          <div
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              fontSize: 9,
                              color: '#0EA5E9',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              marginTop: 3,
                              fontWeight: 700,
                            }}
                          >
                            {item.sub}
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{
                        background: 'rgba(255,107,0,0.08)',
                        border: '1px solid rgba(255,107,0,0.18)',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#FF6B00',
                        fontWeight: 700,
                      }}
                    >
                      Quoted
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── ALWAYS INCLUDED ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
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
                <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
                ─── 06 / Always included
              </div>
              <h3
                className="mb-4"
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
                Never paid <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>extra.</em>
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: '#555',
                  lineHeight: 1.75,
                }}
              >
                Other removalists tack these onto your final bill. We never do.
                They&apos;re in your quote from the start — every single time.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                className="rounded-[24px] p-7 lg:p-8"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <ul className="space-y-3.5" style={{ listStyle: 'none', padding: 0 }}>
                  {alwaysIncluded.map((inc, i) => (
                    <motion.li
                      key={inc}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: '#0EA5E9',
                          marginTop: 2,
                        }}
                      >
                        <Check size={13} color="#fff" strokeWidth={3} />
                      </span>
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: 15.5,
                          color: '#333',
                          lineHeight: 1.55,
                        }}
                      >
                        {inc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── BOTTOM CTA ────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#fff' }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] p-8 lg:p-14"
            style={{
              background: '#111110',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,107,0,0.25), transparent 70%)',
              }}
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3">
                <div
                  className="mb-3 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#FF6B00',
                  }}
                >
                  ✦ Ready when you are
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(32px, 3.5vw, 48px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 14,
                  }}
                >
                  Tell us the job. We&apos;ll{' '}
                  <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                    quote it.
                  </em>
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                    maxWidth: 480,
                  }}
                >
                  Takes two minutes. We&apos;ll send a fixed quote within the hour —
                  no obligation, no callback chasing you for weeks.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-2">
                <Link
                  href="/book"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(255,107,0,0.4)',
                  }}
                >
                  Get your free quote
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+61481356811"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={14} />
                  +61 481 356 811
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
