import history from './history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import rootApi from 'services/api';
import userReducer from './slices/userSlice';
import loaderReducer from './slices/loaderSlice';
import settingReducer from './slices/settingSlice';

const persisConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
  whitelist: ['user', 'setting'],
};

const connectRouterReducer = connectRouter(history);
const rootReducer = combineReducers({
  router: connectRouterReducer,
  user: userReducer,
  loader: loaderReducer,
  setting: settingReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export default persistReducer(persisConfig, rootReducer);
