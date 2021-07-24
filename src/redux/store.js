import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import rootApi from 'services/api';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const middlewares = [rootApi.middleware, logger, routerMiddleware(history)];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: true,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
}

export default store;
