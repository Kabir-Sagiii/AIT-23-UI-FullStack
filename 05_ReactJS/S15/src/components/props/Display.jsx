import React from "react";
import "./props.css";
function Display(props) {
  return (
    <div className="display">
      <h1>Display Component</h1>
      <p>{props.data}</p>
    </div>
  );
}

export default Display;
