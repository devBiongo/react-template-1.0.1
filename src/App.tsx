import Test from "@/components/Test";
import React, { useState } from "react";
import "./app.less";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <Test />
      <h2>webpack5+react+ts1</h2>
      <p>受控组件1</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </>
  );
}
export default App;
