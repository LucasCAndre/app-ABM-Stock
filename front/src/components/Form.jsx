import React, { useState } from 'react';

function Form({id}) {
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState('active');

  async function handleCreate() {
    const data = {
      quantity,
      price,
      product,
      client,
      status,
    };
    await fetch('https://crudcrud.com/api/4ea59a8c967b4c3dbf273e5a1b0c3377/stock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };

  async function handleEdit() {
    const data = {
      quantity,
      price,
      product,
      client,
      status,
    };
    await fetch(`https://crudcrud.com/api/4ea59a8c967b4c3dbf273e5a1b0c3377/stock/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };

  function btn() {
    if (id !== undefined) {
      return (
        <button
        type="button"
        onClick={ handleEdit }
      >
        Editar
      </button>
      )
    }
    return (
      <button
        type="button"
        onClick={ handleCreate }
      >
        Criar
      </button>
    )
  };

  return (
    <form>
      <label htmlFor="quantity">
        Quantity:
        <input
          value={ quantity }
          onChange={ (e) => setQuantity(e.target.value) }
          id="quantity"
          type="number"
          placeholder="qtty"
          required
        />
      </label>
      <label htmlFor="price">
        Price:
        <input
          value={ price }
          onChange={ (e) => setPrice(e.target.value) }
          id="price"
          type="number"
          placeholder="price"
          required
        />
      </label>
      <label htmlFor="product">
        Product:
        <input
          value={ product }
          onChange={ (e) => setProduct(e.target.value) }
          id="product"
          type="text"
          placeholder="product"
          required
        />
      </label>
      <label htmlFor="client">
        Client:
        <input
          value={ client }
          onChange={ (e) => setClient(e.target.value) }
          id="client"
          type="number"
          placeholder="qtty"
          required
        />
      </label>
      <select onChange={ (e) => setStatus(e.target.value) }>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      { btn() }
    </form>
  )
};

export default Form;
