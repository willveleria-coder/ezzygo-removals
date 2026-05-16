'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Clock,
  DollarSign,
  Users,
  Phone,
  Sparkles,
} from 'lucide-react';
import { services, type Service } from '@/lib/services';

// AFTER
export default function ServiceDetailView({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  const idx = services.findIndex((s) => s.slug === slug);
  const related = [
    services[(idx + 1) % services.length],
    services[(idx + 2) % services.length],
    services[(idx + 3) % services.length],
  ];

  const Icon = service.icon;

  return (
    <>
      {/* ── ABOUT + INCLUSIONS ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,107,0,0.04) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: description + stats */}
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
                <span
                  style={{
                    display: 'inline-block',
                    width: 28,
                    height: 1,
                    background: '#FF6B00',
                  }}
                />
                What you get
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(38px, 4vw, 56px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                  marginBottom: 18,
                }}
              >
                {service.title.split(' ')[0]}
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  done properly.
                </em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                style={{
                  fontSize: 16,
                  color: '#555',
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                {service.description}
              </motion.p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Clock, label: 'Duration', value: service.duration },
                  { icon: DollarSign, label: 'From', value: service.from },
                  { icon: Users, label: 'Crew', value: '2–4 movers' },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[16px] p-3 lg:p-5"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <div
                      className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{
                        background: 'rgba(255,107,0,0.08)',
                        border: '1px solid rgba(255,107,0,0.18)',
                      }}
                    >
                      <s.icon size={14} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 8,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#aaa',
                        marginBottom: 3,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 'clamp(18px, 2vw, 22px)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#111',
                        lineHeight: 1.05,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {s.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: inclusions card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-[24px] p-6 lg:sticky lg:top-28 lg:p-8"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div
                  className="mb-5 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    color: '#0EA5E9',
                  }}
                >
                  <Sparkles size={11} />
                  What&apos;s included
                </div>

                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.01em',
                    marginBottom: 20,
                    lineHeight: 1.1,
                  }}
                >
                  Everything in your booking.
                </div>

                <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                  {service.inclusions.map((inc, i) => (
                    <motion.li
                      key={inc}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: '#0EA5E9',
                        }}
                      >
                        <Check size={11} style={{ color: '#fff' }} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 14, color: '#444', lineHeight: 1.5 }}>
                        {inc}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="/#quote"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(255,107,0,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#e55f00';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  Get my quote <ArrowRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS — DARK ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#111110' }}
      >
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, rgba(255,107,0,0.08) 0%, transparent 55%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 grid items-end gap-6 lg:grid-cols-2 lg:gap-12">
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
                <span
                  style={{
                    display: 'inline-block',
                    width: 28,
                    height: 1,
                    background: '#FF6B00',
                  }}
                />
                How it works
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(38px, 4vw, 56px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Simple,
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  step by step.
                </em>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                maxWidth: 400,
              }}
            >
              From the first call to the last box. Here&apos;s exactly what
              happens when you book this service.
            </motion.p>
          </div>

          <div
            className={`grid gap-3 sm:grid-cols-2 ${
              service.process.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
            }`}
          >
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative rounded-[20px] p-6 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.25)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 64,
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: '#FF6B00',
                    lineHeight: 0.85,
                    letterSpacing: '-0.03em',
                    marginBottom: 16,
                  }}
                >
                  {step.step}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#fff',
                    letterSpacing: '0.02em',
                    lineHeight: 1.1,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#FF6B00',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 1,
                  background: '#FF6B00',
                }}
              />
              FAQ
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(38px, 4vw, 56px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Common{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                questions.
              </em>
            </motion.h2>
          </div>

          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1', borderTop: '1px solid rgba(0,0,0,0.07)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-4">
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
                <span
                  style={{
                    display: 'inline-block',
                    width: 28,
                    height: 1,
                    background: '#FF6B00',
                  }}
                />
                Keep exploring
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(34px, 3.6vw, 48px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                You might also{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>need.</em>
              </motion.h2>
            </div>
            <Link
              href="/services"
              className="hidden items-center gap-2 transition-colors sm:inline-flex"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#FF6B00',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              All services <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block cursor-pointer overflow-hidden rounded-[20px] p-6"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.07)',
                    textDecoration: 'none',
                    transition:
                      'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow =
                      '0 24px 56px rgba(255,107,0,0.13), 0 4px 16px rgba(0,0,0,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,107,0,0.45)';
                    e.currentTarget.style.background = 'rgba(255,247,240,1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                    e.currentTarget.style.background = '#fff';
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)',
                    }}
                  />

                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(255,107,0,0.08)',
                        border: '1px solid rgba(255,107,0,0.18)',
                      }}
                    >
                      <s.icon size={20} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      style={{
                        color: 'rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s, color 0.3s',
                      }}
                      className="group-hover:!text-[#FF6B00] group-hover:rotate-12"
                    />
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
                      marginBottom: 16,
                    }}
                  >
                    {s.short}
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
                          fontSize: 24,
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
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/services"
              className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(0,0,0,0.1)',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 16,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#111',
                textDecoration: 'none',
              }}
            >
              See all services <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="overflow-hidden rounded-[18px]"
            style={{
              background: isOpen ? 'rgba(255,107,0,0.04)' : '#fff',
              border: isOpen
                ? '1px solid rgba(255,107,0,0.3)'
                : '1px solid rgba(0,0,0,0.07)',
              transition: 'background 0.3s, border-color 0.3s',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left lg:p-6"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(17px, 1.8vw, 21px)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#111',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                }}
              >
                {faq.q}
              </span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                style={{
                  background: isOpen ? '#FF6B00' : 'rgba(255,107,0,0.08)',
                  border: isOpen
                    ? '1px solid #FF6B00'
                    : '1px solid rgba(255,107,0,0.2)',
                }}
              >
                {isOpen ? (
                  <Minus size={14} style={{ color: '#fff' }} strokeWidth={2.5} />
                ) : (
                  <Plus size={14} style={{ color: '#FF6B00' }} strokeWidth={2.5} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    className="px-5 pb-5 lg:px-6 lg:pb-6"
                    style={{
                      fontSize: 15,
                      color: '#555',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}