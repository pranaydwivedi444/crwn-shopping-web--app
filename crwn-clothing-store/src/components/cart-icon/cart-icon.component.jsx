import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
function CartIcon() {
  const { setIsCartOpen, isCartOpen, cartItems } = useContext(CartContext);
  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleIsCartOpen} className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
}

export default CartIcon;
