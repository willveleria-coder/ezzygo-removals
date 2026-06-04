'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowUpRight,
  Truck,
} from 'lucide-react';

const ADDRESS = 'Redbank Plains QLD 4301, Australia';
const ENCODED_ADDRESS = encodeURIComponent(ADDRESS);

// Google Maps free embed — no API key required
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${ENCODED_ADDRESS}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

// Open directions in user's default maps app (Apple Maps / Google Maps)
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_ADDRESS}`;

const serviceAreas = [
  { name: 'Brisbane',       drive: 'Local',  slug: 'brisbane' },
  { name: 'Ipswich',        drive: '15 min', slug: 'ipswich' },
  { name: 'Logan',          drive: '25 min', slug: 'logan' },
  { name: 'Gold Coast',     drive: '50 min', slug: 'gold-coast' },
  { name: 'Sunshine Coast', drive: '90 min', slug: 'sunshine-coast' },
];

export default function HomepageMap() {
  return (
    <section
      id="location"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

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
              ─── 06 / Where we are
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
              Based in Brisbane,
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                serving all of QLD.
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
              HQ is in Redbank Plains, but our trucks run daily across South
              East Queensland. Local crew, no contractors, no Brisbane premium
              when you&apos;re outside the city.
            </p>
          </motion.div>
        </div>

        {/* ── Map + side panel ── */}
        <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div
              className="relative overflow-hidden rounded-[24px]"
              style={{
                background: '#111110',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* Map iframe */}
              <div className="relative" style={{ height: 'clamp(280px, 80vw, 500px)', width: '100%' }}>

                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    position: 'absolute',
                    inset: 0,
                    filter: 'grayscale(0.05)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EzzyGo Removalist HQ location"
                />

                {/* Floating address badge — top-left */}
                <div
                  className="pointer-events-none absolute left-4 top-4 max-w-[calc(100%-32px)] sm:left-6 sm:top-6"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className="flex items-start gap-3 rounded-[16px] px-4 py-3"
                    style={{
                      background: 'rgba(17,17,16,0.92)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: '#FF6B00',
                        boxShadow: '0 4px 16px rgba(255,107,0,0.5)',
                      }}
                    >
                      <MapPin size={16} color="#fff" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: '#FF6B00',
                          marginBottom: 4,
                        }}
                      >
                        EzzyGo HQ
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: '#fff',
                          letterSpacing: '0.01em',
                          lineHeight: 1.25,
                        }}
                      >
                        Redbank Plains, QLD
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions button — bottom-right */}
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-5 py-3 sm:bottom-6 sm:right-6"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 8px 28px rgba(255,107,0,0.45)',
                    zIndex: 1,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(255,107,0,0.55)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(255,107,0,0.45)';
                  }}
                >
                  <Navigation size={13} />
                  Get directions
                </a>
              </div>

              {/* Address strip below map */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 lg:px-6"
                style={{ background: '#0d0d0c', borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <Truck size={14} style={{ color: '#FF6B00' }} />
                  <span
  style={{
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
  }}
>
  {ADDRESS}
</span>
                </div>
                <a
                  href="tel:+61481356811"
                  className="flex items-center gap-1.5"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#FF6B00',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={12} />
                  +61 481 356 811
                </a>
              </div>
            </div>
          </motion.div>

          {/* SERVICE AREAS PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div
              className="h-full rounded-[24px] p-6 lg:p-7"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <div
                className="mb-1 flex items-center gap-2"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#FF6B00',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#FF6B00' }} />
                Service areas
              </div>

              <h3
                className="mb-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(22px, 2.2vw, 28px)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: '#111',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                Daily runs across{' '}
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>SEQ.</em>
              </h3>

              {/* Service area rows */}
              <div className="space-y-2">
                {serviceAreas.map((area, i) => (
                  <Link
                    key={area.slug}
                    href={`/locations/${area.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 transition-all duration-200"
                    style={{
                      background: '#F5F4F1',
                      border: '1px solid rgba(0,0,0,0.06)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#FFF7F0';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,0,0.3)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#F5F4F1';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full"
                        style={{
                          background: 'rgba(125,211,252,0.12)',
                          border: '1px solid rgba(125,211,252,0.28)',
                        }}
                      >
                        <MapPin size={11} style={{ color: '#0EA5E9' }} strokeWidth={2} />
                      </div>
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
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#0EA5E9',
                          fontWeight: 700,
                        }}
                      >
                        {area.drive}
                      </span>
                      <ArrowUpRight
                        size={12}
                        style={{ color: '#FF6B00' }}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Hours — blue (info/status, not action) */}
              <div
                className="mt-5 rounded-[14px] p-4"
                style={{
                  background: 'rgba(125,211,252,0.08)',
                  border: '1px solid rgba(125,211,252,0.25)',
                }}
              >
                <div
                  className="mb-2 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#0EA5E9',
                  }}
                >
                  <Clock size={11} />
                  Open today
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 17,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#111',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  7am – 9pm
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 12,
                    color: '#666',
                    marginTop: 3,
                  }}
                >
                  7 days a week
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}