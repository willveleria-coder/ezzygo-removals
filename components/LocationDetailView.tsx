'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Clock,
  Lightbulb,
  Plus,
  Minus,
  Truck,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getLocation, locations } from '@/lib/locations';

export default function LocationDetailView({ slug }: { slug: string }) {
  const loc = getLocation(slug)!;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Related = next 3 locations
  const idx = locations.findIndex((l) => l.slug === slug);
  const related = [
    locations[(idx + 1) % locations.length],
    locations[(idx + 2) % locations.length],
    locations[(idx + 3) % locations.length],
  ];

  return (
    <>
      <PageHero
        eyebrow={`Service area · ${loc.state}`}
        headline={`${loc.name} removals`}
        italic={loc.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: loc.name },
        ]}
        ctas={[
          { label: 'Book online', href: '/book', variant: 'primary' },
          { label: '+61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />

      {/* OVERVIEW + WHY CHOOSE */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 90% 20%, rgba(255,107,0,0.06) 0%, transparent 50%), radial-gradient(circle at 5% 80%, rgba(255,107,0,0.04) 0%, transparent 45%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
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
                Why locals choose us
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
                Local crew,{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  local knowledge.
                </em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                style={{
                  fontSize: 16.5,
                  color: '#555',
                  lineHeight: 1.75,
                  maxWidth: 580,
                  marginBottom: 32,
                }}
              >
                {loc.description}
              </motion.p>

              {/* Why choose list */}
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                style={{ listStyle: 'none', padding: 0 }}
              >
                {loc.whyChoose.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: '#FF6B00', marginTop: 1 }}
                    >
                      <Check size={13} color="#fff" strokeWidth={3} />
                    </span>
                    <span style={{ fontSize: 14.5, color: '#333', lineHeight: 1.55 }}>
                      {w}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Meta cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <MetaCard label="Population" value={loc.population} />
                <MetaCard label="From Brisbane" value={loc.driveFromBrisbane} />
                <MetaCard label="Suburbs covered" value={`${loc.suburbs.length}+`} />
                <MetaCard label="Rating" value="4.9 ★" />
              </div>

              {/* Local tip */}
              <div
                className="mt-4 rounded-[20px] p-6"
                style={{
                  background: '#111110',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="mb-3 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#FF6B00',
                  }}
                >
                  <Lightbulb size={12} />
                  Local tip
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 14.5,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                  }}
                >
                  {loc.localTips}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUBURBS COVERED */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#111110' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,107,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,107,0,0.05) 0%, transparent 45%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10">
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
              Suburbs we cover
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
                color: '#fff',
              }}
            >
              {loc.name} &{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                surrounds.
              </em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="flex flex-wrap gap-2"
          >
            {loc.suburbs.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="rounded-full px-4 py-2 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#fff',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(125,211,252,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(125,211,252,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <p
            className="mt-8"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 14,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
            }}
          >
            Don&apos;t see your suburb? We probably still cover it —{' '}
            <a href="tel:+61481356811" style={{ color: '#FF6B00', textDecoration: 'none', fontWeight: 700 }}>
              give us a quick call
            </a>{' '}
            and we&apos;ll confirm.
          </p>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10">
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
              Popular routes
            </div>
            <h2
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
              Moves we do{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                every week.
              </em>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {loc.popularRoutes.map((r, i) => (
              <motion.div
                key={`${r.from}-${r.to}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-[18px] p-5 transition-all duration-200"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFF7F0';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(255,107,0,0.08)',
                    border: '1px solid rgba(255,107,0,0.18)',
                  }}
                >
                  <Truck size={17} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                </div>
                <div className="flex-1 flex items-center gap-3 flex-wrap">
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#111',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {r.from}
                  </span>
                  <ArrowRight size={14} style={{ color: '#FF6B00' }} />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#111',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {r.to}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mb-10 text-center">
            <div
              className="mb-4 flex items-center justify-center gap-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#FF6B00',
              }}
            >
              <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
              {loc.name} FAQ
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              {loc.name} customers{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                often ask.
              </em>
            </h2>
          </div>

          <div className="space-y-3">
            {loc.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-[18px]"
                  style={{
                    background: '#fff',
                    border: `1px solid ${isOpen ? 'rgba(255,107,0,0.3)' : 'rgba(0,0,0,0.07)'}`,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left lg:p-6"
                    style={{ cursor: 'pointer' }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 'clamp(16px, 1.5vw, 19px)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#111',
                        letterSpacing: '0.01em',
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all"
                      style={{
                        background: isOpen ? '#FF6B00' : 'rgba(255,107,0,0.08)',
                        border: `1px solid ${isOpen ? '#FF6B00' : 'rgba(255,107,0,0.18)'}`,
                      }}
                    >
                      {isOpen ? (
                        <Minus size={15} color="#fff" strokeWidth={2.5} />
                      ) : (
                        <Plus size={15} style={{ color: '#FF6B00' }} strokeWidth={2.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="px-5 pb-5 lg:px-6 lg:pb-6"
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: 15,
                            color: '#555',
                            lineHeight: 1.7,
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OTHER LOCATIONS */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
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
                Other areas
              </div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                Moving{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  somewhere else?
                </em>
              </h2>
            </div>
            <Link
              href="/locations"
              className="group flex items-center gap-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#FF6B00',
                textDecoration: 'none',
              }}
            >
              See all locations
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/locations/${r.slug}`}
                className="group relative block overflow-hidden rounded-[20px] p-6"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  textDecoration: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,107,0,0.13)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                  e.currentTarget.style.background = '#FFF7F0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  e.currentTarget.style.background = '#fff';
                }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: 'rgba(255,107,0,0.08)',
                      border: '1px solid rgba(255,107,0,0.18)',
                    }}
                  >
                    <MapPin size={17} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    style={{ color: '#FF6B00' }}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.01em',
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {r.name}
                </h3>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.55 }}>
                  {r.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-[16px] p-5"
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#aaa',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 26,
          fontWeight: 900,
          color: '#111',
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}