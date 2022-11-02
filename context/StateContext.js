import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const initialCartItems = [];
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartitems] = useState(initialCartItems);
  const itemsCartQuantity = cartItems.length;

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems", cartItems);
    setCartitems(JSON.parse(cartItems));
  }, []);

  useEffect(() => {
    if (cartItems == initialCartItems) return;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product, quantity = 1) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      addQuantityToCart(product._id, quantity);
    } else {
      setCartitems([...cartItems, { ...product, quantity }]);
    }
    setShowCart(true);
  };

  const addQuantityToCart = (productId, quantity = 1) => {
    setCartitems((cartItems) =>
      cartItems.map((x) => {
        const newQuantity = x.quantity + quantity < 0 ? 0 : x.quantity + quantity;
        return x._id === productId ? { ...x, quantity: newQuantity } : x;
      })
    );
  };

  const removeItemFromCart = (productId) => {
    setCartitems((cartItems) => cartItems.filter((x) => x._id !== productId));
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartitems,
        addItemToCart,
        addQuantityToCart,
        removeItemFromCart,
        itemsCartQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
