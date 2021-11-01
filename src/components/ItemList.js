import React from "react";
import { Data } from "./Data";
import BasicTextFields from "./components/SearchBox";
import Items from "./Items";
import Checkbox from "../CheckBox";
import "./ItemList.css";

const ItemList = () => {
  return (
    <div className="first-container">
      <div className="searchbox-container">
        <BasicTextFields />
        <Checkbox />
      </div>
      <div className="list-container">
        {Data.map((item) => {
          return (
            <Items
              name={item.name}
              price={item.price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
