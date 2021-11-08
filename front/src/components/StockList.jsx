import React, { useEffect, useState } from "react";

function StockList({setId}) {
  const [stockList, setStockList] = useState([]);
  const [orderBy, setOrderBy] = useState('description');

  async function getList() {
    const listing = await fetch('https://crudcrud.com/api/4ea59a8c967b4c3dbf273e5a1b0c3377/stock', {
      method: 'GET',
    });
    try {
      const list = await listing.json();
      setStockList(list);
    } catch(e) {
      console.log(e);
    }
  }

  function handleEditBtn(e) {
    setId(e.target.id);
  };

  async function handleDeleteBtn(e) {
    const { id } = e.target;
    await fetch(`https://crudcrud.com/api/4ea59a8c967b4c3dbf273e5a1b0c3377/stock/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  function orderList() {
    stockList.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
    setStockList([...stockList]);
  }
  
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <select onChange={ (e) => setOrderBy(e.target.value) }>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
        <option value="product">Product</option>
        <option value="client">Client</option>
        <option value="status">Status</option>
      </select>
      <button onClick={ orderList }>Ordenar</button>
      <ul>
        {stockList.map((item) => {
          return (
            <div key={item._id}>
              <li id={item._id}>{`${item.quantity} - ${item.price} - ${item.product} - ${item.status}`}</li>
              <button type="button" id={item._id} onClick={ (e) => handleEditBtn(e) }>Select</button>
              <button type="button" id={item._id} onClick={ (e) => handleDeleteBtn(e) }>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
};

export default StockList;
