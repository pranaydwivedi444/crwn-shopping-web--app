import { async } from "@firebase/util";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

function PaymentForm() {
  // console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const stripe = useStripe();

  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }),
    });
    console.log("response:", response);
    const data = await response.json();

    const clientSecret = data.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Pranay",
        },
      },
    });
    if (paymentResult.error) alert(`payment failed ${paymentResult.error}`);
    else {
      if (paymentResult.paymentIntent.status == "succeeded")
        alert("HYRREY PAYMENT DONE");
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>STRIPE PAYMENT</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
