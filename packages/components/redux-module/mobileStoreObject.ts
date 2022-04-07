import AsyncStorage from '@react-native-community/async-storage';

import { getStoreObject } from './getStoreObject';
import { getRootReducer } from './rootReducer';

export const mobileStoreObject = getStoreObject(
  AsyncStorage,
  getRootReducer(),
);
