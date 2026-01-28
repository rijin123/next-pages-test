import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    body: content,
  };
}

export function getPostBySlugOrNull(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return getPostBySlug(slug);
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
