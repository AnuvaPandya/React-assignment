import React from "react";

const Items = (props) => {
  return (
    <>
      <div
        style={{
          color: props.stocked ? "black" : "red",
          border: "1px solid red",
          margin: "1rem auto",
        }}
      >
        {props.name}
        {props.price}
      </div>
    </>
  );
};

export default Items;
