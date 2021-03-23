import React from "react";
// HTMLにコンポーネントを反映
import Reactdom from "react-dom";
// コンポーネント
import App from "./App";

// 関数を用いてコンポーネントを表現

//render関数で画面にコンポーネントを表示

Reactdom.render(<App />, document.getElementById("root"));
