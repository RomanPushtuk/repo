import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';

import { getRootReducer } from './rootReducer';

export const getStoreObject = (
  persistStorage: any,
  rootReducer = getRootReducer(),
  platformDependentMiddlewares = [],
) => {
  // @ts-ignore
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const blackListForSomeIgnoredReducer = createBlacklistFilter(
    'someIgnoredReducer',
    ['someIgnoredKey', 'someIgnoredKey2', 'someIgnoredKey3'],
  );

  const persistConfig = {
    key: 'root',
    storage: persistStorage,
    transforms: [blackListForSomeIgnoredReducer],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middleware = applyMiddleware(...platformDependentMiddlewares, thunk);

  const store = {
    ...createStore(persistedReducer, composeEnhancer(middleware)),
  };

  const persistor = persistStore(store);

  return { store, persistor };
};
