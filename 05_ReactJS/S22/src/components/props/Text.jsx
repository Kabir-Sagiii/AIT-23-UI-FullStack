import { useState } from "react";
import "./props.css";
import Display from "./Display";
function Text() {
  const [state, setState] = useState("Hello, How are you");
  return (
    <div className="text">
      <h1>Text Component</h1>
      <button
        onClick={() => {
          setState("React JS Library");
        }}
      >
        Update
      </button>
      <Display data={state} />
    </div>
  );
}

export default Text;
