import { useDispatch, useSelector, Provider } from 'react-redux';
import { mobileStoreObject } from './mobileStoreObject';
import { webStoreObject } from './webStoreObject';
import { RootState } from './rootReducer';

export {
  Provider,
  mobileStoreObject,
  webStoreObject,
  useDispatch,
  useSelector,
};

export type { RootState };
