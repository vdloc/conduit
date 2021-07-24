import userReducer from './slices/userSlice';
import loaderReducer from './slices/loaderSlice';
import rootApi from 'services/api';

const rootReducer = {
  user: userReducer,
  loader: loaderReducer,
  [rootApi.reducerPath]: rootApi,
};

export default rootReducer;
