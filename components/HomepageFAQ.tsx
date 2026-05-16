'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Pricing',
    q: 'How much does a removalist actually cost?',
    a: 'It depends on home size, distance and crew. As a rough guide: a 2-bedroom local move runs $720–$1,090, a 3-bedroom $1,090–$1,520, and a 4+ bedroom full day $1,520–$2,200. Our hourly rate starts at $169/hr for 2 movers + truck — GST, insurance, blankets and equipment all included.',
  },
  {
    category: 'Time',
    q: 'How long will my move take?',
    a: 'Most 2-bedroom moves take 3-4 hours, 3-bedrooms 4-6 hours, 4+ bedrooms a full day. Add 20-30% if you have stairs or restricted access. We give you a fixed quote up front so you know exactly what to expect.',
  },
  {
    category: 'Insurance',
    q: 'Are you insured if something gets damaged?',
    a: 'Yes — every job is covered by public liability and goods-in-transit insurance. If we damage anything, we file the claim and replace or pay out within 14 days. All claims must be reported in writing within 7 days of the move.',
  },
  {
    category: 'Booking',
    q: 'Can I cancel or reschedule if my plans change?',
    a: 'Absolutely. Cancel or reschedule up to 24 hours before your move at no charge. Within 24 hours, a one-hour cancellation fee applies. If we need to reschedule on our end (rare), no fees apply and we work with you to find a new time.',
  },
  {
    category: 'Payment',
    q: 'When do I pay? Do you take cards?',
    a: 'Payment is due on the day of the move. We accept bank transfer, card, and cash. For larger interstate jobs we may ask for a small deposit when booking. All prices include GST.',
  },
  {
    category: 'Coverage',
    q: 'Do you cover my area?',
    a: 'We run daily trucks across all of South East Queensland — Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan and everywhere between. Interstate moves to NSW and VIC are also welcome. Not sure about your suburb? Call us and we\'ll confirm in 30 seconds.',
  },
  {
    category: 'Same-day',
    q: 'Can you do same-day or last-minute moves?',
    a: 'Most days yes — call before 11am and we usually have a crew free by afternoon. We don\'t charge an urgent surcharge unless you specifically need a same-day priority booking on a busy day.',
  },
  {
    category: 'Special items',
    q: 'Can you move pianos, pool tables, or other heavy items?',
    a: 'Yes — we move pianos, pool tables, gun safes, gym equipment, and other specialty items regularly. Let us know when booking so we bring the right crew (usually 3-4 movers) and equipment like specialty trolleys and straps.',
  },
];

export default function HomepageFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 25%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 88% 75%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* ── Header ── */}
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
              ─── 05 / FAQ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(40px, 4.5vw, 68px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Questions
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                we get a lot.
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
              Most of what people ask is about price, timing, and what&apos;s
              actually included. Here&apos;s the honest version — no marketing
              spin.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 group"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FF6B00',
                textDecoration: 'none',
              }}
            >
              Have another question? Ask us
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-[18px]"
                style={{
                  background: isOpen ? '#FFF7F0' : '#fff',
                  border: `1px solid ${
                    isOpen ? 'rgba(255,107,0,0.35)' : 'rgba(0,0,0,0.07)'
                  }`,
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left lg:p-7"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="flex-1">
                    {/* Category pill */}
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: '#0EA5E9',
                        fontWeight: 700,
                      }}
                    >
                      ─ {faq.category}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 'clamp(17px, 1.7vw, 22px)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#111',
                        letterSpacing: '0.01em',
                        lineHeight: 1.25,
                      }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all"
                    style={{
                      background: isOpen ? '#FF6B00' : 'rgba(255,107,0,0.08)',
                      border: `1px solid ${
                        isOpen ? '#FF6B00' : 'rgba(255,107,0,0.18)'
                      }`,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={16} color="#fff" strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} style={{ color: '#FF6B00' }} strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="px-5 pb-5 lg:px-7 lg:pb-7"
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: 15.5,
                          color: '#555',
                          lineHeight: 1.75,
                          maxWidth: 760,
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

        {/* ── Bottom CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[24px] p-7 lg:p-10"
          style={{
            background: '#111110',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,107,0,0.25) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />

          <div className="relative grid items-center gap-6 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-3">
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
                ✦ Still got questions?
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 10,
                }}
              >
                Talk to a{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  real human.
                </em>
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 14.5,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  maxWidth: 420,
                }}
              >
                We&apos;ll answer your call in under 3 rings. No call centre,
                no waiting on hold.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-2 lg:items-end">
              <a
                href="tel:+61481356811"
                className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200 lg:w-auto lg:px-8"
                style={{
                  background: '#FF6B00',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 8px 28px rgba(255,107,0,0.4)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Phone size={15} />
                +61 481 356 811
              </a>
              <Link
                href="/book"
                className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200 lg:w-auto lg:px-8"
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
                  whiteSpace: 'nowrap',
                }}
              >
                Book online
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}