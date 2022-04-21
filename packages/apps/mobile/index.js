import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider, mobileStoreObject} from '@repo/redux-module';
import {api} from '@repo/api-module';

import App from './src/App';
import {name as appName} from './app.json';
import {config} from './src/configs';

api.setConfig(config);

const {store} = mobileStoreObject(api);

const ConnectAppToRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectAppToRedux);
