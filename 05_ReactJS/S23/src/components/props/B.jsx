import React from "react";
import C from "./C";
function B({ data }) {
  return (
    <div>
      <h1>B Component </h1>
      <br />
      <hr />
      <br />
      <C data={data} />
    </div>
  );
}

export default B;
