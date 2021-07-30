import commentArticleMutation from './commentArticle';
import deleteCommentMutation from './deleteComment';
import getArticleCommentsQuery from './getArticleComments';

const commentEndpoints = {
  endpoints: (builder) => ({
    commentArticle: builder.mutation(commentArticleMutation),
    deleteComment: builder.mutation(deleteCommentMutation),
    getArticleComments: builder.query(getArticleCommentsQuery),
  }),
};

export default commentEndpoints;
