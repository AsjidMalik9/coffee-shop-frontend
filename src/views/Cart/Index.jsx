import React, { useContext } from 'react';
import { CartContext } from '../../cartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className='d-flex align-items-center mb-3'>
        <h2 className='mr-auto'>Cart</h2>
        {cartItems.length > 0 && (
          <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
        )}
      </div>
      
      {cartItems.length === 0 && (
        <div className="alert alert-info" role="alert">
          Your cart is empty.
        </div>
      )}

      {cartItems.map((item) => (
        <div className='card mb-3' key={item.itemId}>
          <div className='card-body'>
            <h4 className='card-title'>{item.name}</h4>
            <p className='card-text'>Quantity: {item.quantity}</p>
            <div>
              <button className='btn btn-primary mr-2' onClick={() => addToCart({ id: item.itemId })}>+</button>
              <button className='btn btn-secondary mr-2' onClick={() => removeFromCart(item.itemId)}>-</button>
              <button className='btn btn-warning' onClick={() => removeFromCart(item.itemId, true)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
