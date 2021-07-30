import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils/storage';
import { TAG_TYPES } from '@/constants';
import profileEndpoints from './profile';
import articleEndpoints from './article';
import commentEndpoints from './comment';
import authEndpoints from './auth';
import feedEndpoints from './feed';
import userEndpoints from './user';

const rootApi = createApi({
  reducerPath: 'conduitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.token || getToken();

      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  tagTypes: Object.values(TAG_TYPES),
  endpoints: () => ({}),
});

rootApi
  .injectEndpoints(profileEndpoints)
  .injectEndpoints(articleEndpoints)
  .injectEndpoints(commentEndpoints)
  .injectEndpoints(authEndpoints)
  .injectEndpoints(userEndpoints)
  .injectEndpoints(feedEndpoints);

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
  useGetArticleCommentsQuery,
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
