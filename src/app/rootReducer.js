import history from './history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import commentReducer from 'features/comment/commentSlice';
import loaderReducer from 'features/loader/loaderSlice';
import feedReducer from 'features/feed/feedSlice';
import userReducer from 'features/user/userSlice';
import rootApi from 'services';

const persisConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
  whitelist: ['user', 'setting'],
};

const connectRouterReducer = connectRouter(history);
const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  router: connectRouterReducer,
  comment: commentReducer,
  loader: loaderReducer,
  feed: feedReducer,
  user: userReducer,
});

export default persistReducer(persisConfig, rootReducer);
