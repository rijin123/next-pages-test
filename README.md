# Next Pages Test

## 概要
- Next.js（App Router）で静的書き出し（`output: "export"`）するサイト
- 記事は `content/posts/*.md` を読み込み
- GitHub Pages 配信を想定（`basePath` / `assetPrefix` は環境変数で切替）

## 構成
- `src/app/` : App Router のページ
  - `src/app/page.tsx` : トップ
  - `src/app/posts/page.tsx` : 記事一覧
  - `src/app/posts/[slug]/page.tsx` : 記事詳細
- `src/lib/content.ts` : Markdown 読み込み
- `content/posts/` : 記事Markdown
- `public/uploads/` : CMS 画像アップロード先
- `.pages.yml` : Pages CMS 設定

## ローカルでの確認方法
### 開発サーバー
```bash
npm run dev
```
- http://localhost:3000

### 静的書き出し（GitHub Pages 相当）
```bash
npm run build
```
- 出力先: `out/`

#### 書き出し結果の確認
```bash
npx serve out
```
- http://localhost:3000

## GitHub Pages 向けの注意
- `NEXT_PUBLIC_BASE_PATH` を使って `basePath` / `assetPrefix` を切替
- 例: `NEXT_PUBLIC_BASE_PATH=/your-repo-name` を設定してビルド
