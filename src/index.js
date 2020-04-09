import Cart from "./components/cart";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import root from "./reducer";
import React from "react";

const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <Cart token={"pk_test_GvOaE0WLNjwMhq7p2qj6Yksq00mf4IWEKF"} />
  </Provider>,
  document.getElementById("root")
);
