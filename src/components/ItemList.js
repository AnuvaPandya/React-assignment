import React from "react";
import { Data } from "./Data";
// import BasicTextFields from "./components/SearchBox";
import Items from "./Items";

const ItemList = () => {
  return (
    <div>
      <div>
        {Data.map((item) => {
          return <Items name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
