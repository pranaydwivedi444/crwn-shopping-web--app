import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
function CartIcon() {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleIsCartOpen} className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
}

export default CartIcon;
