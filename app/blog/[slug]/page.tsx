import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogArticleView from '@/components/BlogArticleView';
import { posts, getPost } from '@/lib/blog';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: 'Article not found' };
  return {
    title: `${post.title} | EzzyGo Removalist`,
    description: post.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />
      <BlogArticleView slug={post.slug} />
      <Footer />
    </main>
  );
}