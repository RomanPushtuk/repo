import { ApiInstance } from '@repo/api-module';
import storage from 'redux-persist/lib/storage';

import { getStoreObject } from './getStoreObject';

export const webStoreObject = (api: ApiInstance) =>
  getStoreObject(api, storage);
