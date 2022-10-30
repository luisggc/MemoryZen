import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartitems] = useState([]);
  const addItemToCart = (product, quantity = 1) => {
    const exist = cartItems.find((x) => x._id === product._id);
    console.log(cartItems);
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

  let quantity = 0;
  useEffect(() => {
    quantity = cartItems.length;
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartitems,
        quantity,
        addItemToCart,
        addQuantityToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
