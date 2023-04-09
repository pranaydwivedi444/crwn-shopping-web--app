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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  total: 0,
};

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "SET_CART_ITEMS":
//       break;

//     default:
//       throw new Error(`unhandled type of ${type} in cartReducer`);
//       break;
//   }
// };

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  // const updateCardItemsReducer = (newCartItems)=>{

  // }

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
