const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    let { amount } = JSON.parse(event.body);
  
    amount = (amount >=1 && amount <=100 ? amount.toFixed(2) : 5)*100;
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://jajjferris.com/thank-you',
      cancel_url: 'https://jajjferris.com/donate',
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      }),
    }
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Whoops! Looks like my server doesn\'t want to process the payment. Try again later.',
      }),
    }
  }
};
