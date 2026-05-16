'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost' | 'phone';
};

type Breadcrumb = {
  label: string;
  href?: string;
};

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  italic?: string;
  subtitle?: string;
  ctas?: CTA[];
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  eyebrow,
  headline,
  italic,
  subtitle,
  ctas,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#111110',
        paddingTop: 'clamp(60px, 8vh, 160px)',
paddingBottom: 'clamp(24px, 3vh, 80px)',
      }}
    >
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-15%',
          right: '-10%',
          width: 'min(700px, 80vw)',
          height: 'min(700px, 80vw)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,0,0.28) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '-20%',
          left: '-10%',
          width: 'min(500px, 70vw)',
          height: 'min(500px, 70vw)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,0,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            {breadcrumbs.map((b, i) => (
              <span
                key={`${b.label}-${i}`}
                className="flex items-center gap-2"
              >
                {b.href ? (
                  <Link
                    href={b.href}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    className="transition-colors hover:text-[#FF6B00]"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span style={{ color: '#FF6B00' }}>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        <div className="grid items-end gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5 flex items-center gap-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
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
              {eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              {headline}
              {italic && (
                <>
                  <br />
                  <em
                    style={{
                      fontStyle: 'italic',
                      color: '#FF6B00',
                    }}
                  >
                    {italic}
                  </em>
                </>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginTop: 26,
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right: CTAs */}
          {ctas && ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 lg:col-span-2 lg:items-end lg:pb-2"
            >
              {ctas.map((cta) => {
                const isPrimary = !cta.variant || cta.variant === 'primary';
                const isPhone = cta.variant === 'phone';
                const isExternal =
                  cta.href.startsWith('http') ||
                  cta.href.startsWith('tel:') ||
                  cta.href.startsWith('mailto:');
                const Tag: any = isExternal ? 'a' : Link;
                return (
                  <Tag
                    key={cta.label}
                    href={cta.href}
                    className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200 lg:w-auto lg:px-8"
                    style={{
                      background: isPrimary
                        ? '#FF6B00'
                        : 'rgba(255,255,255,0.06)',
                      border: isPrimary
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.12)',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 17,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#fff',
                      textDecoration: 'none',
                      boxShadow: isPrimary
                        ? '0 8px 32px rgba(255,107,0,0.4)'
                        : 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e: any) => {
                      if (isPrimary) {
                        e.currentTarget.style.background = '#e55f00';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow =
                          '0 16px 48px rgba(255,107,0,0.5)';
                      } else {
                        e.currentTarget.style.background =
                          'rgba(255,255,255,0.1)';
                        e.currentTarget.style.borderColor =
                          'rgba(255,255,255,0.22)';
                      }
                    }}
                    onMouseLeave={(e: any) => {
                      if (isPrimary) {
                        e.currentTarget.style.background = '#FF6B00';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow =
                          '0 8px 32px rgba(255,107,0,0.4)';
                      } else {
                        e.currentTarget.style.background =
                          'rgba(255,255,255,0.06)';
                        e.currentTarget.style.borderColor =
                          'rgba(255,255,255,0.12)';
                      }
                    }}
                  >
                    {isPhone && (
                      <Phone size={15} style={{ color: '#FF6B00' }} />
                    )}
                    {cta.label}
                    {isPrimary && <ArrowRight size={16} />}
                  </Tag>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}