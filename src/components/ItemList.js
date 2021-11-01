import React, { useState } from "react";
import { Data } from "./Data";
import Items from "./Items";
import "./ItemList.css";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import CategoryList from "./CategoryList";

const ItemList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [store, setStore] = useState("");
  const [includes, setIncludes] = useState([]);

  return (
    <div style={{ border: "2px solid sandybrown" }}>
      <div
        style={{
          border: "1px solid blue",
          padding: "10px",
          margin: "1rem",
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
          padding: "10px",
          margin: "1rem",
        }}
      >
        <CategoryList
          data={Data}
          store={store}
          includes={includes}
          categoryName={"Sporting Goods"}
        />
        <CategoryList
          data={Data}
          store={store}
          includes={includes}
          categoryName={"Electronics"}
        />
      </div>
    </div>
  );
};

export default ItemList;
