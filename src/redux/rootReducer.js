import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import loaderReducer from './slices/loaderSlice';
import rootApi from 'services/api';

const createRootReducer = (history) => ({
  router: connectRouter(history),
  user: userReducer,
  loader: loaderReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export default createRootReducer;
