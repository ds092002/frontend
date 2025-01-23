import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 50 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 1500 },
];

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart((pc) => {
      const itemExist = pc.find((item) => item.id === p.id);
      if (itemExist) {
        return pc.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...pc, { ...p, quantity: 1 }];
    });
  };

  const remove = (id) => {
    setCart((pc) => pc.filter((i) => i.id !== id));
  };

  const tp = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Rs. {product.price}</p>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Rs. {item.price} x {item.quantity}
              <button onClick={() => remove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>Total: Rs. {tp()}</div>
    </div>
  );
};

export default AddToCart;
