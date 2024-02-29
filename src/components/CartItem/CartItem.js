import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { id, name, price, stock } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>stock: {stock}</p>
      </div>
      <button onClick={() => onRemove(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
