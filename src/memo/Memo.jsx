import React, { useState, useCallback } from "react";
import Child from "./Child";

function Memo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("Avi");

  const increment = () => {
    console.log("increment1");
    setCount((c) => c + 1);
  };

  const increment2 = () => {
    console.log("increment2");
    setCount2((c) => c + 1);
  };

  const doNothing = () => {
    console.log("doNothing");
    setName("Avi");
  };

  return (
    <div>
      <h1>MEMO </h1>
      <h2>
        cjange export default (Child)
        <br /> to export default memo(Child);
      </h2>
      <hr />
      Count: {count}
      <button onClick={increment}>+</button>
      <hr />
      Count2: {count2}
      <button onClick={increment2}>+</button>
      <hr />
      <button onClick={doNothing}>nothing</button>
      <Child name={name} count={count} />
    </div>
  );
}

export default Memo;
