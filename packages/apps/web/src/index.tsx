import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import { webStoreObject, Provider } from "@repo/redux-module";
// import { createApi } from '@repo/api-module';

import App from "./App";

// import { BASE_URL, DEFAULT_SEARCH_PARAMS, REQUEST_HEADERS } from './configs';
//
// const apiInstance = createApi({
//   baseURL: BASE_URL,
//   timeout: 1000,
//   headers: REQUEST_HEADERS,
//   params: DEFAULT_SEARCH_PARAMS,
// });

const { store } = webStoreObject;

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
