import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { ApiInstance } from '@repo/api-module';
import { persistReducer, persistStore, Storage } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { rootReducer, RootState } from './rootReducer';
import { RootSaga } from './sagas/sagaWeather';

const blackListForSomeIgnoredReducer = createBlacklistFilter(
  'someIgnoredReducer',
  ['someIgnoredKey', 'someIgnoredKey2', 'someIgnoredKey3'],
);

export const getStoreObject = <T extends Storage>(
  api: ApiInstance,
  persistStorage: T,
) => {
  const persistConfig = {
    key: 'root',
    storage: persistStorage,
    transforms: [blackListForSomeIgnoredReducer],
  };

  const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer,
  );

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: persistedReducer,
    middleware: new MiddlewareArray().concat(thunk, sagaMiddleware),
  });

  sagaMiddleware.run(RootSaga(api));

  const persistor = persistStore(store);

  return { store, persistor };
};
