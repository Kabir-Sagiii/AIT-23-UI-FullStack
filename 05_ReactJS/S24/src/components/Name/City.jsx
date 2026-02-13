import { useRef } from "react";
import { useDispatch } from "react-redux";

function City() {
  const cityRef = useRef();
  const dispatch = useDispatch();

  const getCity = () => {
    const cityAction = {
      type: "city",
      payload: cityRef.current.value,
    };

    dispatch(cityAction);
  };
  return (
    <div style={{ padding: "10px 100px" }}>
      <h1>City</h1>
      <select ref={cityRef} onChange={getCity}>
        <option>Pune</option>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Mumbai</option>
      </select>
    </div>
  );
}

export default City;
