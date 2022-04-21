import AsyncStorage from '@react-native-community/async-storage';
import { ApiInstance } from '@repo/api-module';

import { getStoreObject } from './getStoreObject';

export const mobileStoreObject = (api: ApiInstance) =>
  getStoreObject(api, AsyncStorage);
