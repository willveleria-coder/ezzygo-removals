'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';

export default function ServicesGrid() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Section heading */}
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
              <span
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 1,
                  background: '#FF6B00',
                }}
              />
              All services
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
              Pick what you need.
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                We&apos;ll handle the rest.
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{
              fontSize: 16,
              color: '#666',
              lineHeight: 1.7,
              maxWidth: 380,
            }}
          >
            10 services, 1 trusted crew. Tap any service to see exactly
            what&apos;s included and how it works.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block overflow-hidden rounded-[20px] p-6 lg:p-7"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.07)',
                    textDecoration: 'none',
                    transition:
                      'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(-6px) scale(1.015)';
                    e.currentTarget.style.boxShadow =
                      '0 24px 56px rgba(255,107,0,0.13), 0 4px 16px rgba(0,0,0,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,107,0,0.45)';
                    e.currentTarget.style.background = '#FFF7F0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                    e.currentTarget.style.background = '#fff';
                  }}
                >
                  {/* Corner glow */}
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)',
                    }}
                  />

                  {/* Top row */}
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                      style={{
                        background: 'rgba(255,107,0,0.08)',
                        border: '1px solid rgba(255,107,0,0.18)',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: '#FF6B00' }}
                        strokeWidth={1.8}
                      />
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

                  {/* Title */}
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 24,
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

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13,
                      color: '#777',
                      lineHeight: 1.6,
                      minHeight: 52,
                      marginBottom: 18,
                    }}
                  >
                    {s.short}
                  </p>

                  {/* Footer row */}
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
                      className="flex items-center gap-1.5"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        color: '#FF6B00',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      Learn more
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}