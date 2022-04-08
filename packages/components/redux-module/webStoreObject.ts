import storage from 'redux-persist/lib/storage';

import { getStoreObject } from './getStoreObject';

export const webStoreObject = getStoreObject(storage);
