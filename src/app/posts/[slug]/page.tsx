import { getAllPostSlugs, getPostBySlugOrNull } from "@/lib/content";
import { notFound } from "next/navigation";
import { marked } from "marked";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

type Params = { slug?: string };

export default async function PostPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { slug: rawSlug } = await params;
  if (!rawSlug) return notFound();
  const post = getPostBySlugOrNull(rawSlug);
  if (!post) return notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
    </main>
  );
}
