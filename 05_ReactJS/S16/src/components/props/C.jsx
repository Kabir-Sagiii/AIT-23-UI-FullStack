import React from "react";
import D from "./D";
function C({ data1 }) {
  return (
    <div>
      <h1>C Component</h1>
      <br />
      <hr />
      <br />
      <D data={data1} />
    </div>
  );
}

export default C;
