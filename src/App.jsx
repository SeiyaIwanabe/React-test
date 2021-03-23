import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowfalg, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowfalg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowfalg || setFaceShowFlag(true);
      } else {
        faceShowfalg && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>一途</h1>
      <ColorfulMessage color="blue">生き方の良し悪しではない</ColorfulMessage>
      <ColorfulMessage color="brown">
        時代に合っているかいないかだ
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowfalg && <p>(^o^)</p>}
    </>
  );
};

// App.jsを他のファイルでも使えるようにする
export default App;
