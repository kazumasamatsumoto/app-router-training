// サーバーアクションズには'use server'の宣言が必要
"use server";

interface FormState {
  error: string;
}

// taskIdを受け取れるようにする
export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  // DBにタスクを作成すると仮定
  // 成功したらコンソールログに表示
  // VSCodeのコンソールに表示されることを確認ができるのでサーバー側でこの関数が実行されているとわかる
  console.log("タスクを作成しました");
  console.log(formData);
  console.log(formData.get("name"));
  console.log(taskId);
  state.error = "エラーが発生しました";
  return state;
  //   タスクを作成しました
  //   FormData {
  //     '$ACTION_REF_0': '',
  //     '$ACTION_0:1': '[1]',
  //     '$ACTION_0:0': '{"id":"8d71b5bd23d859fe4108689b197f700c38a06427","bound":"$@1"}',
  //     name: 's'
  //   }
  //   s
  //   1
};
