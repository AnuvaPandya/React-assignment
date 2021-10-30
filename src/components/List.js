import React, { useState } from "react";
import { Data } from "./Data";
import BasicTextFields from "./components/SearchBox";

const List = () => {
  const [info, setInfo] = useState(Data);

  return (
    <div>
      {/* <BasicTextFields /> */}
      <div>
        Name Price
        <div>
          <Data />
        </div>
      </div>
    </div>
  );
};

export default List;
