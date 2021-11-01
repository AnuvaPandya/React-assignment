import React, { useState } from "react";
import { Data } from "./Data";
import Items from "./Items";
import "./ItemList.css";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";

const ItemList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [store, setStore] = useState("");
  const [includes, setIncludes] = useState([]);

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
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(event) => setStore(event.target.value)}
        />
        <div>
          <Checkbox
            {...label}
            onChange={(event) => setIncludes(event.target.checked)}
          />
          Only show products in stock
        </div>
      </div>
      <div
        style={{
          border: "1px solid green",
          borderSpacing: "2cm 2em",
          padding: "10px",
          margin: "5rem auto",
        }}
      >
        {Data.filter((item) => item.name.toLowerCase().includes(store))
          .filter((item) => {
            if (includes == false) {
              return true;
            }
            if (includes == true) {
              return item.stocked == true;
            }
          })
          .map((item) => {
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
