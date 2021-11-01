import React from "react";
import "./ItemList.css";

const Items = (props) => {
  return (
    <div>
      {props.name}
      {props.price}
    </div>
  );
};

export default Items;
