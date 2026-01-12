import { useState } from "react";
import "./Count.css";
function Count() {
  var [state, setState] = useState("Welcome to React State Concept");

  function updateState() {
    setState("Hello I am State Concept of React");
  }

  return (
    <div className="count">
      <h1>{state}</h1>
      <button onClick={updateState}>Click me</button>
    </div>
  );
}

export default Count;
