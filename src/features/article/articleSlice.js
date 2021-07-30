import rootApi from 'services';
import { authDispatch } from 'libs/auth';

const {
  favoriteArticle: favoriteArticleMutation,
  unfavoriteArticle: unfavoriteArticleMutation,
  unfollowUser: unfollowUserMutation,
  followUser: followUserMutation,
} = rootApi.endpoints;

export const favoriteArticle = (slug) => (dispatch, getState) => {
  authDispatch(dispatch, getState, favoriteArticleMutation.initiate(slug));
};

export const unfavoriteArticle = (slug) => (dispatch, getState) => {
  authDispatch(dispatch, getState, unfavoriteArticleMutation.initiate(slug));
};

export const followUser = (username) => (dispatch, getState) => {
  authDispatch(dispatch, getState, followUserMutation.initiate(username));
};

export const unfollowUser = (username) => (dispatch, getState) => {
  authDispatch(dispatch, getState, unfollowUserMutation.initiate(username));
};
