import React from "react";
import ReactDOM from "react-dom";
import Cart from "./components/cart";

ReactDOM.render(
  <Cart stripeToken={process.env.REACT_APP_TOKEN} />,
  // <Cart stripeToken="pk_test_GvOaE0WLNjwMhq7p2qj6Yksq00mf4IWEKF" />,
  document.getElementById("root")
);
