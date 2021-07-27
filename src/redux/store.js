import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootApi from 'services/api';
import rootReducer from './rootReducer';
import history from './history';

const isNonProductionMode = process.env.NODE_ENV !== 'production';
const middlewares = [rootApi.middleware, routerMiddleware(history)];

if (isNonProductionMode) {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  devTools: isNonProductionMode,
});

if (isNonProductionMode && module.hot) {
  module.hot.accept(['./rootReducer', 'services/api'], () => {
    const rootReducer = require('./rootReducer').default;

    store.replaceReducer(rootReducer);
  });
}

export const persistor = persistStore(store);
export default store;
