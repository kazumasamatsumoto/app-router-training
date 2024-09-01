import { NextResponse } from "next/server";

// Task型の定義
export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "プログラミング" },
  { id: 2, name: "ランニング" },
];

// 待機する関数
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// この非同期関数の定義としてルートハンドラーになる
// 関数名がHTTPメソッドと対応しているGETメソッドになる
// POSTやPUTやDELETEにも対応している
export const GET = async () => {
  // 3秒待ちます
  await sleep(3000);
  // const tasksをルートハンドラーの戻り値としてクライアントに返却する
  // 第二引数にはステータスコードを宣言可能
  //   ルートハンドラーは静的な要素としてビルドされる
  // コーポレートサイトなどのデータの更新度合いが低い場合問題ないが

  return NextResponse.json(
    { tasks },
    {
      status: 200,
    }
  );
};
export const POST = async () => {};

// データの更新頻度が高い場合は以下のように設定
// ルートセグメントコンフィグという項目らしい
export const dynamic = "force-dynaminc";
