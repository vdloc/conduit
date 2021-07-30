import createArticleMutation from './createArticle';
import deleteArticleMutation from './deleteArticle';
import favoriteArticleMutation from './favoriteArticle';
import unfavoriteArticleMutation from './unfavoriteArticle';
import updateArticleMutation from './updateArticle';
import getArticleQuery from './getArticle';
import getTagsQuery from './getTags';

const articleEndpoints = {
  endpoints: (builder) => ({
    createArticle: builder.mutation(createArticleMutation),
    updateArticle: builder.mutation(updateArticleMutation),
    deleteArticle: builder.mutation(deleteArticleMutation),
    favoriteArticle: builder.mutation(favoriteArticleMutation),
    unfavoriteArticle: builder.mutation(unfavoriteArticleMutation),
    getArticle: builder.query(getArticleQuery),
    getTags: builder.query(getTagsQuery),
  }),
};

export default articleEndpoints;
