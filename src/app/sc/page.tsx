const ServerComponent = () => {
  console.log("Server Component");
  // ターミナルにコンソールログが表示される
  // これがサーバーコンポーネントで処理されているというのがわかる
  // useState() →　コンパイルエラー
  // onClick={() => {}} クライエントコンポーネントの機能
  return <div>ServerComponent</div>;
};

export default ServerComponent;
