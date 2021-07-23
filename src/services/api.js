import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import articleEndpoints from './article/articleEndpoints';
import authEndpoints from './auth/authEndpoints';
import TAGS from './TAGS';
import userEndpoints from './user/userEndpoints';

const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      const token =
        getState()?.user?.token ||
        window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  tagTypes: Object.values(TAGS),
  endpoints: () => ({}),
});

rootApi
  .injectEndpoints(articleEndpoints)
  .injectEndpoints(authEndpoints)
  .injectEndpoints(userEndpoints);

export const {
  // Article queries
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useCommentArticleMutation,
  useDeleteCommentMutation,
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
  useGetArticleQuery,
  useGetGlobalFeedQuery,
  useGetSubscribedFeedQuery,
  useGetTagsQuery,
  // Auth queries
  useLoginMutation,
  useRegisterMutation,
  // User queries
  useFollowUserMutation,
  useUnfollowUserMutation,
  useUpdateUserMutation,
  useGetCurrentUserQuery,
  useGetUserProfileQuery,
} = rootApi;

export default rootApi;
