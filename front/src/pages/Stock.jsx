import React, { useState } from "react";
import Form from '../components/Form';
import StockList from "../components/StockList";

function Stock() {
  const [id, setId] = useState();

  return (
    <div>
      {
        id
        ? <Form id={id} />
        : <Form />
      }
      <StockList setId={setId} />
    </div>
  )
};

export default Stock;
