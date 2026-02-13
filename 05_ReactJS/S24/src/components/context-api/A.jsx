import { useState } from "react";
import "./context.css";
import B from "./B";
import MyContext from "./context";

function A() {
  const [state, setState] = useState("i am A-Data");
  return (
    <div className="A">
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState("New Data");
        }}
      >
        Change Data
      </button>
      <MyContext value={state}>
        <B />
      </MyContext>
    </div>
  );
}

export default A;
