import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const { name, city } = useSelector((store) => {
    return store;
  });
  return (
    <div style={{ padding: "10px 100px" }}>
      <h1 style={{ color: "green" }}>User Details Component</h1>
      <br />
      <dl>
        <dt style={{ fontSize: "24px" }}>
          <b>User Name</b>
        </dt>

        <dd>{name}</dd>
        <br />

        <dt style={{ fontSize: "24px" }}>
          <b>City</b>
        </dt>

        <dd>{city}</dd>
      </dl>
    </div>
  );
}

export default Details;
