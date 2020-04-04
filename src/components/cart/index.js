import React, { useState, useEffect } from "react";

const items = [
  {
    sku: process.env.REACT_APP_DOLLAR,
    quantity: 1,
    price: 100,
    name: "A Singular Dollar",
  },
  {
    sku: process.env.REACT_APP_COFFEE,
    quantity: 1,
    price: 500,
    name: "Starbucks Coffee",
  },
  {
    sku: process.env.REACT_APP_MEAL,
    quantity: 1,
    price: 1000,
    name: "Cheap Meal",
  },
  {
    sku: process.env.REACT_APP_EXTEND_DOMAIN,
    quantity: 1,
    price: 2000,
    name: "Extend Domain For One Year",
  },
];

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    console.log(stripeToken);
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    stripe.redirectToCheckout({
      items: items.map((item) => ({
        quantity: item.quantity,
        sku: item.sku,
      })),
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/canceled",
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Quanity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{item.name}: </td>
                <td>{item.quantity}</td>
                <td>{formatPrice(item.price)}</td>
              </tr>
            </React.Fragment>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colSpan={3}>
              Total:
            </td>
            <td>{formatPrice(totalPrice(items))}</td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={checkout}>Checkout now with Stripe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
