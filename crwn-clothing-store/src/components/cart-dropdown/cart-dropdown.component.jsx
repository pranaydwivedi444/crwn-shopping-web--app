import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.style.jsx";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Navigate, useNavigate } from "react-router-dom";
import { CartDropdownContainer } from "./cart-dropdown.style.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckouthandler() {
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
      <cartItems>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
      </cartItems>
      <Button onClick={goToCheckouthandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
