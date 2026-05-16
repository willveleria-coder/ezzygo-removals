'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowUpRight, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getPost, posts } from '@/lib/blog';

export default function BlogArticleView({ slug }: { slug: string }) {
  const post = getPost(slug)!;
  const idx = posts.findIndex((p) => p.slug === slug);
  const related = [
    posts[(idx + 1) % posts.length],
    posts[(idx + 2) % posts.length],
  ];

  return (
    <>
      <PageHero
        eyebrow={post.category}
        headline={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title },
        ]}
      />

      {/* META BAR */}
      <section
        className="relative"
        style={{ background: '#F5F4F1' }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-black/10 py-6"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888',
            }}
          >
            <span className="flex items-center gap-2">
              <Calendar size={12} style={{ color: '#0EA5E9' }} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={12} style={{ color: '#0EA5E9' }} />
              {post.readTime} read
            </span>
            <span style={{ color: '#FF6B00', fontWeight: 700 }}>
              By {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section
        className="relative"
        style={{ background: '#F5F4F1' }}
      >
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {post.body.map((block, i) => (
              <div key={i} className="mb-8">
                {block.heading && (
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(24px, 2.5vw, 32px)',
                      fontWeight: 900,
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      color: '#111',
                      marginBottom: 16,
                      marginTop: 8,
                    }}
                  >
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 17,
                      color: '#333',
                      lineHeight: 1.75,
                      marginBottom: 16,
                    }}
                  >
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '12px 0 0',
                    }}
                  >
                    {block.list.map((item, li) => (
                      <li
                        key={li}
                        className="flex items-start gap-3 py-2"
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            background: '#FF6B00',
                            marginTop: 4,
                          }}
                        >
                          <span style={{ color: '#fff', fontSize: 10, fontWeight: 900 }}>
                            ✓
                          </span>
                        </span>
                        <span
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: 16,
                            color: '#333',
                            lineHeight: 1.65,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>

          {/* End-of-article CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-[24px] p-7 lg:p-10"
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
              ✦ Ready to move?
            </div>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(28px, 3vw, 38px)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: 14,
              }}
            >
              Now stop reading,{' '}
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                let&apos;s do it.
              </em>
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 15,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: 22,
                maxWidth: 460,
              }}
            >
              Get a fixed quote in under 60 seconds. No phone tag, no pressure
              — just an honest price.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 rounded-[14px] px-7 py-4"
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
                }}
              >
                Book online
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+61481356811"
                className="flex items-center justify-center gap-2 rounded-[14px] px-7 py-4"
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
                <Phone size={14} style={{ color: '#FF6B00' }} />
                +61 481 356 811
              </a>
            </div>
          </motion.div>
        </article>
      </section>

      {/* MORE ARTICLES */}
      <section
        className="relative"
        style={{ background: '#F5F4F1' }}
      >
        <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
                Keep reading
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
                  the blog.
                </em>
              </h2>
            </div>
            <Link
              href="/blog"
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
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              All articles
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
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
                    className="rounded-full px-3 py-1"
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
                    {p.category}
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
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 13.5, color: '#777', lineHeight: 1.6 }}>
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}