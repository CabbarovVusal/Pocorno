import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
    setCartCount((prevCount) => prevCount + 1);
  };

  const decreaseFromCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.count > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        )
      );
      setCartCount((prevCount) => prevCount - 1);
    } else {
      removeFromCart(product);
    }
  };

  const removeFromCart = (product) => {
    const filteredItems = cartItems.filter((item) => item.id !== product.id);
    const productCount =
      cartItems.find((item) => item.id === product.id)?.count || 0;
    setCartItems(filteredItems);
    setCartCount((prevCount) => prevCount - productCount);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((totalPrice, item) => {
      const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return totalPrice + priceNumber * item.count;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        cartCount,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
