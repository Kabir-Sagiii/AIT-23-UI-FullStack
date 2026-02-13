import { useState } from "react";

function Users() {
  const [state, setState] = useState([
    "Rohan",
    "Viraj",
    "Vishal",
    "Shubham",
    "Aakash",
    "Rakesh",
    "Amit",
    "pooja",
    "sonali",
  ]);
  return (
    <div>
      {state.map(function (user) {
        return (
          <div>
            <p>{user}</p>
          </div>
        );
      })}
    </div>

    // <div>
    //   {state.map(function (user) {
    //     return <h1>{user}</h1>;
    //   })}
    // </div>
  );
}

export default Users;
