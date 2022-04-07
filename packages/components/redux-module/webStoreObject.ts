import storage from 'redux-persist/lib/storage';

import { getStoreObject } from './getStoreObject';
import { getRootReducer } from './rootReducer';

export const webStoreObject = getStoreObject(
  storage,
  getRootReducer(),
  [],
);
