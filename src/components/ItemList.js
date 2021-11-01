import React from "react";
import { Data } from "./Data";
import Items from "./Items";
import "./ItemList.css";
// import SearchBox from "./SearchBox";
// import { Checkbox } from "@mui/material";

const ItemList = () => {
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div
        style={{
          border: "1px solid blue",
          borderSpacing: "1cm 2em",
          padding: "8px",
          margin: "5rem auto",
        }}
      >
        {/* <div>
          <Checkbox {...label} />
          Only show products in stock
        </div> */}
        {/* <SearchBox /> */}
      </div>
      <div
        style={{
          border: "1px solid green",
          borderSpacing: "2cm 2em",
          padding: "10px",
          margin: "5rem auto",
        }}
      >
        {Data.filter((item) => item.stocked == true).map((item) => {
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
