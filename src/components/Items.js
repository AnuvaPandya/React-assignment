import React from "react";

const Items = ({ name, price, stocked }) => {
  return (
    <>
      <div
        style={{
          color: stocked ? "black" : "red",
          border: "1px solid red",
          margin: "1rem auto",
        }}
      >
        {name}
        {price}
      </div>
    </>
  );
};

export default Items;
