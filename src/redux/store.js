import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootApi from 'services/api';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware, logger),
  devTools: true,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
}

export default store;
