require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_CLIENT_SECRET_KEY);

export async function handler(event) {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    console.log(paymentIntent);

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: paymentIntent.id,
        client_secret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
}
