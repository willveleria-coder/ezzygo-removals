'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Brisbane → Gold Coast',
    rating: 5,
    text: 'Fantastic moving service! The team arrived on time, handled everything carefully and made our house move completely stress-free. Would 100% recommend.',
    initials: 'SM',
    hero: true,
  },
  {
    name: 'Marcus J.',
    location: 'Logan, QLD',
    rating: 5,
    text: 'On time, careful with everything, and cheaper than the quote. Absolute legends.',
    initials: 'MJ',
    hero: false,
  },
  {
    name: 'Priya K.',
    location: 'Sunshine Coast',
    rating: 5,
    text: 'Great experience from booking to delivery. Friendly staff, fair pricing and excellent communication throughout.',
    initials: 'PK',
    hero: false,
  },
  {
    name: 'Daniel R.',
    location: 'Ipswich → Toowoomba',
    rating: 5,
    text: "Cheapest quote, best service. The two guys worked their tails off and didn't damage a single thing. Will use again.",
    initials: 'DR',
    hero: false,
  },
  {
    name: 'Lena W.',
    location: 'Office relocation, CBD',
    rating: 5,
    text: 'Moved our entire office in one weekend with zero downtime. EzzyGo absolutely smashed it. Worth every cent.',
    initials: 'LW',
    hero: false,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} style={{ fill: '#FF6B00', color: '#FF6B00' }} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [hero, ...rest] = reviews;

  return (
    <section
      id="reviews"
      className="relative overflow-hidden"
      style={{ background: '#111110' }}
    >
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,107,0,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(125,211,252,0.05) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

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
              05 / Reviews
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
                color: '#fff',
              }}
            >
              People{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>love</em>
              <br />
              moving with us.
            </motion.h2>
          </div>

          {/* Google rating pill */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex items-center justify-start gap-4 lg:justify-end"
          >
            <div
              className="flex items-center gap-4 rounded-[20px] px-6 py-4"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 44,
                    fontWeight: 900,
                    color: '#FF6B00',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  4.9
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} style={{ fill: '#FF6B00', color: '#FF6B00' }} />
                  ))}
                </div>
              </div>
              <div
                style={{
                  width: 1,
                  alignSelf: 'stretch',
                  background: 'rgba(125,211,252,0.25)',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#7DD3FC',
                    marginBottom: 4,
                  }}
                >
                  Google rating
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '0.01em',
                  }}
                >
                  2,400+ moves
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: 2,
                  }}
                >
                  across Queensland
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">

          {/* Hero card (stays orange) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] p-7 lg:row-span-2 lg:p-9"
            style={{
              background: 'rgba(255,107,0,0.08)',
              border: '1px solid rgba(255,107,0,0.25)',
            }}
          >
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.2), transparent 70%)' }}
            />

            <div className="relative">
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(255,107,0,0.15)', border: '1px solid rgba(255,107,0,0.3)' }}
              >
                <Quote size={20} style={{ color: '#FF6B00' }} />
              </div>

              <StarRow count={hero.rating} />

              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(24px, 2.4vw, 32px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  marginTop: 18,
                  marginBottom: 28,
                }}
              >
                &ldquo;{hero.text}&rdquo;
              </p>

              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: 20,
                }}
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 900,
                    color: '#fff',
                    letterSpacing: '0.02em',
                  }}
                >
                  {hero.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 18,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#fff',
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {hero.name}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <MapPin size={10} style={{ color: '#7DD3FC' }} />
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {hero.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rest of cards — MapPin in blue */}
          <div className="contents lg:col-span-2 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
            {rest.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
                className="mt-4 rounded-[22px] p-6 transition-all duration-300 lg:mt-0"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.25)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <StarRow count={r.rating} />

                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                    marginTop: 14,
                    marginBottom: 20,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                <div
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(255,107,0,0.12)',
                      border: '1px solid rgba(255,107,0,0.2)',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 13,
                      fontWeight: 900,
                      color: '#FF6B00',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 16,
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#fff',
                        letterSpacing: '0.02em',
                        lineHeight: 1,
                      }}
                    >
                      {r.name}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <MapPin size={9} style={{ color: '#7DD3FC' }} />
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 8,
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          color: 'rgba(255,255,255,0.3)',
                        }}
                      >
                        {r.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}