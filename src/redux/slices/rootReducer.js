import userReducer from './userSlice';
import feedReducer from './feed/feedSlice';
import tagReducer from './tag/tagSlice';
import loaderReducer from './loaderSlice';
import tabSlice from './tab/tabSlice';

const rootReducer = {
  user: userReducer,
  // feed: feedReducer,
  // tag: tagReducer,
  loader: loaderReducer,
  // tab: tabSlice,
};

export default rootReducer;
