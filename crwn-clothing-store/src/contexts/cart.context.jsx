import { useState } from "react";
import { createContext } from "react";

const addItemCart = (productToAdd, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //quanitity

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
/////////////////////////////////////////////////////////////////////
const removeItemFromCart = (cartItemToRemove, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToRemove.id
  );

  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }
  //quanitity

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

function clearCartItem(cartItemToRemove, cartItems) {
  return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
}

function updateTotal(cartItems) {
  return cartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemCart: () => {},
  clearItemFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addItemCart(productToAdd, cartItems);
    setCartItems(updatedCartItems);
    setTotal(updateTotal(updatedCartItems));
  };

  const removeItemCart = (cartItemToRemove) => {
    const updatedCartItems = removeItemFromCart(cartItemToRemove, cartItems);
    setCartItems(updatedCartItems);
    setTotal(updateTotal(updatedCartItems));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    const updatedCartItems = clearCartItem(cartItemToRemove, cartItems);
    setCartItems(updatedCartItems);
    setTotal(updateTotal(updatedCartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    removeItemCart,
    clearItemFromCart,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
