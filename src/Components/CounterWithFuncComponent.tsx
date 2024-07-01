import React from "react";
import { useState } from "react";

const CounterWithFuncComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <br /> <br />
      <button>Count {count}</button>
    </div>
  );
};

export default CounterWithFuncComponent;
