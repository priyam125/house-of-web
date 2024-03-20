"use client";
import { createContext, useState, useContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
