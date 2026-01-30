import { useState } from "react";

function RenderData() {
  //   var [state, setState] = useState([10, 20, 30]);
  var [state, setState] = useState([
    <h2>i am h2 </h2>,
    <p>I am Para</p>,
    <div>I ma Div</div>,
  ]);
  return (
    <div>
      <h1>Render Data </h1>
      {state}
    </div>
  );
}

export default RenderData;
