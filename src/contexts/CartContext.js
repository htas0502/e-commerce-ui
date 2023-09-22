import React from 'react';
import { createContext, useState, useEffect } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([])

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // console.log(newItem);

    // check if the item is already in the cart
    const CartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(CartItem);
    // if cart is already in the cart
    if(CartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } 
        else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  };
  // console.log(cart);

  return <CartContext.Provider value={{ cart, addToCart }}>{ children }</CartContext.Provider>;
};

export default CartProvider;
