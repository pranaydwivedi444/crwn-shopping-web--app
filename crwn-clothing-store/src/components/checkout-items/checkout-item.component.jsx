import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
function CheckoutItem({ cartItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemCart } =
    useContext(CartContext);
  function clearItemHandler() {
    clearItemFromCart(cartItem);
  }
  function addItemHandler() {
    addItemToCart(cartItem);
  }
  function removeItemHandler() {
    removeItemCart(cartItem);
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          ⬅️
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          ➡️
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        ❌
      </div>
    </div>
  );
}

export default CheckoutItem;
