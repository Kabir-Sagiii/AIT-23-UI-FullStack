import { useReducer } from "react";

const myReducer = (state, action) => {
  if (action.type === "inc") {
    state = state + 1;
  } else if (action.type === "dec") {
    state = state - 1;
  } else {
    state = 0;
  }

  return state;
};

function UseReducer() {
  var [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div className="reducer">
      <h1>Count Value : {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        dec
      </button>
      <button onClick={dispatch}>reset</button>
    </div>
  );
}

export default UseReducer;
