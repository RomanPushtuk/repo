import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { persistReducer, persistStore, Storage } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';

import { rootReducer, RootState } from './rootReducer';

const blackListForSomeIgnoredReducer = createBlacklistFilter(
  'someIgnoredReducer',
  ['someIgnoredKey', 'someIgnoredKey2', 'someIgnoredKey3'],
);

export const getStoreObject = <T extends Storage>(persistStorage: T) => {
  const persistConfig = {
    key: 'root',
    storage: persistStorage,
    transforms: [blackListForSomeIgnoredReducer],
  };

  const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer,
  );

  const store = configureStore({
    reducer: persistedReducer,
    middleware: new MiddlewareArray().concat(thunk),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
