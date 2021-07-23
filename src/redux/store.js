import { configureStore } from '@reduxjs/toolkit';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import logger from 'redux-logger';
import rootApi from 'services/api';
import rootReducer from './slices/rootReducer';

const store = configureStore({
  reducer: {
    ...rootReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      batchDispatchMiddleware,
      rootApi.middleware,
      logger
    ),
  devTools: true,
});

export default store;
