import { useState } from "react";
import "./context.css";
import B from "./B";
function A() {
  const [state, setState] = useState("i am A-Data");
  return (
    <div className="A">
      <h1>A Component</h1>
      <B />
    </div>
  );
}

export default A;
