import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import rootApi from 'services/api';

const { endpoints } = rootApi;
const endpointsEntries = Object.entries(endpoints);
const hideLoaderStateEndpointsNames = [
  'login',
  'register',
  'updateUser',
  'createArticle',
  'updateArticle',
  'deleteArticle',
  'getGlobalFeed',
  'getArticle',
  'getArticleComments',
  'getSubscribedFeed',
  'getUserProfile',
];
const displayLoaderEndpointsNames = [
  'commentArticle',
  'createArticle',
  'deleteArticle',
  'updateArticle',
  'deleteComment',
  'favoriteArticle',
  'unfavoriteArticle',
  'login',
  'register',
  'followUser',
  'unfollowUser',
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
