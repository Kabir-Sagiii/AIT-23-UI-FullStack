import { useState } from "react";

function StateArray() {
  const [state, setState] = useState(["hyd", "mumbai", "banglore"]);

  function updateCities() {
    setState(["Indore", "Chennai", "Gurugram"]);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Array Data in State </h1>
      <ol>
        <li>{state[0]}</li>
        <li>{state[1]}</li>
        <li>{state[2]}</li>
      </ol>
      <button onClick={updateCities}>Update Cities</button>
    </div>
  );
}

export default StateArray;
