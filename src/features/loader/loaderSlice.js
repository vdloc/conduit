import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import rootApi from 'services';

const { endpoints } = rootApi;
const endpointsEntries = Object.entries(endpoints);
const hideLoaderStateEndpointsNames = [
  'createArticle',
  'deleteArticle',
  'getArticle',
  'getArticleComments',
  'getGlobalFeed',
  'getSubscribedFeed',
  'getUserProfile',
  'login',
  'register',
  'updateArticle',
  'updateUser',
];
const displayLoaderEndpointsNames = [
  'commentArticle',
  'createArticle',
  'deleteArticle',
  'deleteComment',
  'favoriteArticle',
  'followUser',
  'login',
  'register',
  'unfavoriteArticle',
  'unfollowUser',
  'updateArticle',
  'updateUser',
];
const hideLoaderStateEndpoints = endpointsEntries
  .filter(([name]) => hideLoaderStateEndpointsNames.includes(name))
  .flatMap(([_name, endpoint]) => [
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  ]);
const displayLoaderEndpoints = endpointsEntries
  .filter(([name]) => displayLoaderEndpointsNames.includes(name))
  .map(([_name, endpoint]) => endpoint.matchPending);

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    displayLoader() {
      return true;
    },
    hideLoader() {
      return false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(...hideLoaderStateEndpoints), () => {
      return false;
    });
    builder.addMatcher(isAnyOf(...displayLoaderEndpoints), () => {
      return true;
    });
  },
});

export const { displayLoader, hideLoader } = loaderSlice.actions;
export const selectLoaderState = (state) => state.loader;
export default loaderSlice.reducer;
