import AsyncStorage from '@react-native-community/async-storage';

import { getStoreObject } from './getStoreObject';

export const mobileStoreObject = getStoreObject(AsyncStorage);
