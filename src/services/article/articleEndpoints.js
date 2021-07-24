import commentArticleMutation from './commentArticle';
import createArticleMutation from './createArticle';
import deleteArticleMutation from './deleteArticle';
import deleteCommentMutation from './deleteComment';
import favoriteArticleMutation from './favoriteArticle';
import unfavoriteArticleMutation from './unfavoriteArticle';
import updateArticleMutation from './updateArticle';

import getArticleQuery from './getArticle';
import getGlobalFeedQuery from './getGlobalFeed';
import getSubscribedFeedQuery from './getSubscribeFeed';
import getTagsQuery from './getTags';

const articleEndpoints = {
  endpoints: (builder) => ({
    createArticle: builder.mutation(createArticleMutation),
    updateArticle: builder.mutation(updateArticleMutation),
    deleteArticle: builder.mutation(deleteArticleMutation),
    commentArticle: builder.mutation(commentArticleMutation),
    deleteComment: builder.mutation(deleteCommentMutation),
    favoriteArticle: builder.mutation(favoriteArticleMutation),
    unfavoriteArticle: builder.mutation(unfavoriteArticleMutation),
    getArticle: builder.query(getArticleQuery),
    // getArticleComments: builder.query(getArticleCommentsQuery),
    getGlobalFeed: builder.query(getGlobalFeedQuery),
    getSubscribedFeed: builder.query(getSubscribedFeedQuery),
    getTags: builder.query(getTagsQuery),
  }),
};

export default articleEndpoints;
