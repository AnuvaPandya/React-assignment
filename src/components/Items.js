import React from "react";

const Items = (props) => {
  return (
    <div>
      {props.name}
      {props.price}
    </div>
  );
};

export default Items;
