import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import Items from "./Items";
import "./ItemList.css";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import CategoryList from "./CategoryList";

const ItemList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [store, setStore] = useState("");
  const [includes, setIncludes] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

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
        {[...new Set(data.map((item) => item.category))].map((categoryName) => {
          return (
            <CategoryList
              data={data}
              store={store}
              includes={includes}
              categoryName={categoryName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
