import React, { useState } from "react";

import Card from "./Card";

const Hooks = () => {
  const [name, setNames] = useState("Init");
  return (
    <div>
      <Card>
        <h1>{name}</h1>
        <h3 onClick={() => setNames("Stanislav")}>Set Name to Stanislav</h3>
      </Card>
    </div>
  );
};

export default Hooks;
