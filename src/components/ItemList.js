import React from "react";
import { Data } from "./Data";
import Items from "./Items";
import "./ItemList.css";
import { Checkbox } from "@mui/material";

const ItemList = () => {
  return (
    <div className="first-container">
      <div className="searchbox-container">
        <div>
          <Checkbox />
          Only show products in stock
        </div>
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
