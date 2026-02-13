import { useRef } from "react";
import { useDispatch } from "react-redux";
function Name() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const getData = () => {
    const action = {
      type: "name",
      payload: inputRef.current.value,
    };

    dispatch(action);
  };
  return (
    <div style={{ padding: "30px 100px" }}>
      <h1>Name Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="enter name" />
      <button onClick={getData}>Submit</button>
    </div>
  );
}

export default Name;
