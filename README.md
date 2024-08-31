This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## クライアントコンポーネント

・従来の React コンポーネントと同様
・クライアント側でレンダリングが行われる
・ファイルの先頭に'use client'をつけることで CC になる

## サーバーコンポーネント

・サーバー側でレンダリングされる
・Next.js v13.4 から安定板
・Next.js ではサーバーコンポーネントがデフォルト

## サーバーコンポーネントを使うメリット

・パフォーマンスを向上する
・JavaScript のバンドルサイズを小さくできる
・トークンや API キーなどの機密データをクライアントに交換しない
・検索エンジンの最適化

## サーバーコンポーネントを使うデメリット

・クライアントコンポーネントでしか使用できない機能がある
・useState が useEffect などの Hooks
・onClick や onChange などのユーザーイベント
・ブラウザ API
・初期ページ以外は CC の方が表示が速い可能性がある

## それぞれの使い分け

・基本はサーバーコンポーネント推奨
・以下のケースでクライアントコンポーネントを使用する
・useState や useEffect など Hooks が必要な場合
・onClick や onChange などのユーザーイベントを扱う場合
・ブラウザ API が必要な場合

## クライアントコンポーネントを上手に使うコツ

・クライアントコンポーネントはできるだけ小さなコンポーネントにする
