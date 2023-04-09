import { useContext } from "react";
import CheckoutItem from "../../components/checkout-items/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
function Checkout() {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:{total}</span>
      <PaymentForm />
    </div>
  );
}

export default Checkout;
