// ミドルウェアを導入してブラウザからのリクエストがミドルウェアを経由してページに到達する
// 認証、ロギング、リダイレクトなどが挟み込むことができる
// 場所はsrc直下src/middleware.ts

import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  // ミドルウェアが通過していることをわかるように
  console.log("ミドルウェア");
  // 実際のページ処理に移行するには
  return NextResponse.next();
};

// ✓ Compiled /src/middleware in 923ms (71 modules)
// ミドルウェア
//  GET /sa 200 in 223ms
// ミドルウェア
// ミドルウェア
// ミドルウェア
// ミドルウェア
// ミドルウェア
// ミドルウェア
// ミドルウェア
//  GET /favicon.ico 200 in 34ms

export const config = {
  // matcherの配列に指定することでミドルウェアの通過するパスを限定させることが可能になる
  //   以下の場合だとルートページとtaskページのみ通過する
  matcher: ["/", "/task"],
};

// ✓ Compiled in 87ms (71 modules)
// http://localhost:3000/
// ミドルウェア
//  ○ Compiling / ...
//  ✓ Compiled / in 545ms (527 modules)
//  GET / 200 in 846ms
// http://localhost:3000/task
// ミドルウェア
//  ✓ Compiled /api/tasks in 287ms (310 modules)
//  GET /api/tasks 200 in 3649ms
//  GET /task 200 in 3859ms
//  │ GET http://localhost:3000/api/tasks 200 in 3772ms (cache skip)
//  │ │ Cache skipped reason: (cache: no-store)
// http://localhost:3000/sa
//  GET /sa 200 in 334ms
// タスクを作成しました
// FormData {
//   '$ACTION_REF_1': '',
//   '$ACTION_1:0': '{"id":"8d71b5bd23d859fe4108689b197f700c38a06427","bound":"$@1"}',
//   '$ACTION_1:1': '[1,{"error":""}]',
//   '$ACTION_KEY': 'k2341856972',
//   name: ''
// }

// 1
//  POST /sa 200 in 93ms
