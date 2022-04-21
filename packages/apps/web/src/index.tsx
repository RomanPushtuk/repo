import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { webStoreObject, Provider } from "@repo/redux-module";
import { api } from "@repo/api-module";

import App from "./App";

import { config } from "./configs";

api.setConfig(config);

const { store } = webStoreObject(api);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
