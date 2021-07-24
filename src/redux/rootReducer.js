import { connectRouter } from 'connected-react-router';
import userReducer from './slices/userSlice';
import loaderReducer from './slices/loaderSlice';
import rootApi from 'services/api';
import settingReducer from './slices/settingSlice';

const createRootReducer = (history) => ({
  router: connectRouter(history),
  user: userReducer,
  loader: loaderReducer,
  setting: settingReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export default createRootReducer;
