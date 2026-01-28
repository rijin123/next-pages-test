# 前提条件

## Next.js（サイト生成）
- App Router 構成で `src/app` を使用する。
- `next.config.ts` に `output: "export"` を設定する。
- GitHub Pages 配信向けに `basePath` / `assetPrefix` をリポジトリ名に合わせて設定する。
- 画像最適化を無効化する場合は `images.unoptimized = true` を設定する。
- ビルド成果物は `out/` に生成される（`npm run build`）。

## GitHub Pages（公開）
- GitHub Actions を使用できるリポジトリであること。
- GitHub Pages の公開ソースを「GitHub Actions」に設定していること。
- ワークフローで `actions/configure-pages` を実行し、`actions/upload-pages-artifact` と `actions/deploy-pages` を使うこと。
- `GITHUB_PAGES=1` などの環境変数で `basePath` / `assetPrefix` が有効になるようにすること。

## Pages CMS（更新UI）
- リポジトリに Pages CMS 設定ファイル（`.pages.yml` または `pages.config.yml`）があること。
- CMS で編集するコンテンツを `content/` 以下に配置すること。
- 画像アップロード先として `public/uploads` を用意していること。
- GitHub 側で Pages CMS がリポジトリにアクセスできる権限があること。

## コミットメッセージ
- コミットメッセージは日本語で書くこと。
