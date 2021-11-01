import React from "react";
import "./ItemList.css";

const Items = (props) => {
  return (
    <>
      {/* <div className='heading-container'>
      {props.category}
    </div> */}
      <div className="item-container">
        {props.name}
        {props.price}
      </div>
    </>
  );
};

export default Items;
