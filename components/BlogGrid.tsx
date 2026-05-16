'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { posts } from '@/lib/blog';

export default function BlogGrid() {
  const [featured, ...rest] = posts;

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
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[24px] p-8 lg:p-12"
            style={{
              background: '#111110',
              border: '1px solid rgba(255,255,255,0.06)',
              textDecoration: 'none',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,107,0,0.25) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{
                    background: 'rgba(255,107,0,0.12)',
                    border: '1px solid rgba(255,107,0,0.3)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#FF6B00',
                  }}
                >
                  ✦ Featured · {featured.category}
                </div>

                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 16,
                  }}
                >
                  {featured.title}
                </h2>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 16.5,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  {featured.excerpt}
                </p>

                <div
                  className="mt-8 flex items-center gap-5"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {featured.readTime}
                  </span>
                </div>
              </div>

              <div className="flex items-end lg:col-span-4 lg:justify-end">
                <div
                  className="flex items-center gap-2 rounded-[14px] px-6 py-4 transition-all duration-200"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    boxShadow: '0 8px 28px rgba(255,107,0,0.4)',
                  }}
                >
                  Read article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Heading for rest */}
        <div className="mb-8">
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
            All articles
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
            More from{' '}
            <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
              the crew.
            </em>
          </h2>
        </div>

        {/* Rest of posts */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block h-full overflow-hidden rounded-[20px] p-6 lg:p-7"
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
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="inline-flex rounded-full px-3 py-1"
                    style={{
                      background: 'rgba(125,211,252,0.1)',
                      border: '1px solid rgba(125,211,252,0.25)',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#0EA5E9',
                      fontWeight: 700,
                    }}
                  >
                    {post.category}
                  </span>
                  <ArrowUpRight
                    size={15}
                    style={{ color: '#aaa' }}
                    className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                    lineHeight: 1.15,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: 13.5,
                    color: '#777',
                    lineHeight: 1.6,
                    marginBottom: 18,
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  className="flex items-center gap-4 pt-4"
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.07)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#aaa',
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}