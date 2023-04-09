import { loadStripe } from "@stripe/stripe-js";
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

export const options = {
  // passing the client secret obtained from the server
  clientSecret: `{${process.env.REACT_APP_CLIENT_SECRET_KEY}}`,
};
