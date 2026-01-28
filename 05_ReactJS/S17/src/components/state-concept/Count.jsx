import { useState } from "react";
import "./Count.css";
function Count() {
  const [state, setState] = useState(0);

  const increaseCount = () => {
    setState(state + 1);
  };

  return (
    <div className="count">
      <h1>Count Value is : {state}</h1>
      <button onClick={increaseCount}>count++</button>
    </div>
  );
}

export default Count;
