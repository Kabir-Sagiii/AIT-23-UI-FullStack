import { useState } from "react";

function StateObject() {
  const [state, setState] = useState({
    name: "rohan",
    city: "hyd",
    gender: "male",
  });

  console.log(state);

  function updateUser() {
    setState({
      ...state,
      city: "Mumbai",
    });

    // state.name = "Sema" invalid
    // setState({
    //   name: "Seema",
    //   city: "Pune",
    //   gender: "female",
    // });
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Object Data in State </h1>
      <ol>
        <li>{state.name}</li>
        <li>{state.city}</li>
        <li>{state.gender}</li>
      </ol>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default StateObject;
