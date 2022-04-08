import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { webStoreObject, Provider } from "@repo/redux-module";

import App from "./App";

const { store } = webStoreObject;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
