import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider, mobileStoreObject} from '@repo/redux-module';

import App from './src/App';
import {name as appName} from './app.json';

const {store} = mobileStoreObject;

const ConnectAppToRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectAppToRedux);
