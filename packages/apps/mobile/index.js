import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider, mobileStoreObject} from '@repo/redux-module';
// import { createApi } from '@repo/api-module';
// import { BASE_URL, REQUEST_HEADERS, DEFAULT_SEARCH_PARAMS } from './src/configs';

import App from './src/App';
import {name as appName} from './app.json';

// const apiInstance = createApi({
//   baseURL: BASE_URL,
//   timeout: 1000,
//   headers: REQUEST_HEADERS,
//   params: DEFAULT_SEARCH_PARAMS,
// });

const {store} = mobileStoreObject;

const ConnectAppToRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectAppToRedux);
