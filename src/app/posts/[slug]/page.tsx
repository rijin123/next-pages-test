import { getAllPostSlugs, getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const slugs = new Set(getAllPostSlugs());
  if (!slugs.has(params.slug)) return notFound();

  const post = getPostBySlug(params.slug);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
    </main>
  );
}
