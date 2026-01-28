import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>ここはtopページです</h1>
      <p>
        <Link href="/posts">記事一覧へ</Link>
      </p>
    </main>
  );
}
