import { useState } from "react";

function List() {
  const [state, setState] = useState([10, 20, 30, 40, 50]);
  return (
    <div>
      <h1>List Component</h1>
      <ol type="a">
        <li>{state[0]}</li>
        <li>{state[1]}</li>
        <li>{state[2]}</li>
        <li>{state[3]}</li>
        <li>{state[4]}</li>
      </ol>
    </div>
  );
}

export default List;
