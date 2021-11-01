import React from "react";
import "./ItemList.css";

const Items = (props) => {
  return (
    <>
      <div
        style={{
          border: "1px solid cyan",
          borderSpacing: "15px",
          margin: "1rem auto",
        }}
      ></div>
      <div
        style={{
          border: "1px solid red",
        }}
      >
        {props.name}
        {props.price}
      </div>
    </>
  );
};

export default Items;
