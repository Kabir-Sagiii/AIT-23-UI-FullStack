import { useState } from "react";

function List() {
  const [state, setState] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  return (
    <div>
      <h1>List Component</h1>
      <ol type="a">
        {state.map((element) => {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
} // [<li>10</li>,<li>20</li>]

export default List;
