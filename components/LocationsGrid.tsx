'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { locations } from '@/lib/locations';

export default function LocationsGrid() {
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
              5 areas covered
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
              Wherever you&apos;re moving,
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                we&apos;ve got it.
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 380 }}
          >
            Each region has its own crew that knows the suburbs, the buildings,
            and the traffic. Tap a location to see local pricing and tips.
          </motion.p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <Link
                href={`/locations/${loc.slug}`}
                className="group relative block overflow-hidden rounded-[20px] p-6 lg:p-7"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  textDecoration: 'none',
                  transition:
                    'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s, background 0.3s',
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
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)',
                  }}
                />

                <div className="mb-5 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    style={{
                      background: 'rgba(255,107,0,0.08)',
                      border: '1px solid rgba(255,107,0,0.18)',
                    }}
                  >
                    <MapPin size={20} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      color: '#0EA5E9',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    <Clock size={10} />
                    {loc.driveFromBrisbane}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.01em',
                    lineHeight: 1.05,
                    marginBottom: 8,
                  }}
                >
                  {loc.name}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: '#777',
                    lineHeight: 1.6,
                    minHeight: 64,
                    marginBottom: 18,
                  }}
                >
                  {loc.short}
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
                      Population
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 22,
                        fontWeight: 800,
                        color: '#FF6B00',
                        lineHeight: 1,
                      }}
                    >
                      {loc.population}
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
                    Explore
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}