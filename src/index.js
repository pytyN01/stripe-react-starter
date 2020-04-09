import Cart from "./components/cart";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import root from "./reducer";
import React from "react";

const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <Cart stripeToken={process.env.REACT_APP_TOKEN} />
  </Provider>,
  document.getElementById("root")
);
