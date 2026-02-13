import { useContext } from "react";
import MyContext from "./context";

function D() {
  const data = useContext(MyContext);
  return (
    <div>
      <h1>D Component</h1>
      <p style={{ color: "blue", padding: "10px" }}> {data} </p>
    </div>
  );
}

export default D;
