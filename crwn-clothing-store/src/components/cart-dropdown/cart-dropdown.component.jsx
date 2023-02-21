import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Navigate, useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckouthandler() {
    navigate("/checkout");
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckouthandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
