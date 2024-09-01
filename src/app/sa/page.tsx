// hooksを使用するためクライアントを宣言
"use client";
// useFormStatusフック＝＞サーバーアクションズの状態を取得する、react-domから取得
// フォームが定義されたコンポーネントの直下でも期待どおりに動作しない
import { useFormState, useFormStatus } from "react-dom";

// サーバーアクションズ（コンポーネント側）
// サーバーコンポーネントであればサーバーアクションは同一ファイルに定義可能
// クライアントコンポーネントであれば別ファイルに定義必要

import { createTask } from "@/actions/sampleActions";

// サーバーコンポーネントでも可読性向上のため別ファイルに定義推奨
const ServerActionsPage = () => {
  // ここでタスクIDを定義する
  const taskId = 1;
  // バインドするには第一引数をnull、第二引数にバインドしたい値を定義する
  const createTaskWithTaksId = createTask.bind(null, taskId);
  // 初期状態を定義
  const initialState = { error: "" };
  // stateはサーバーアクションの戻り値、formActionはServerActionと同じ挙動をする関数
  const [state, formAction] = useFormState(createTaskWithTaksId, initialState);

  // 安定する場合は直接使うのではなく、一段階コンポーネントをラップしてあげる必要がある
  //   サーバーアクションズが実行中であれば非活性になる
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300"
        disabled={pending}
      >
        送信
      </button>
    );
  };

  return (
    <div>
      {/* サーバーアクションの戻り値をクライアント側で利用できるようになる */}
      <form action={formAction}>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
