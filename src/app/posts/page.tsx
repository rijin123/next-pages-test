import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>{p.title}</Link> ({p.date})
          </li>
        ))}
      </ul>
    </main>
  );
}
