import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getArticleQuery = {
  async queryFn(arg, _api, _options, baseQuery) {
    const articleResult = await baseQuery(`${ENDPOINTS.ARTICLES}/${arg}`);

    if (articleResult.error) throw articleResult.error;

    const commentResult = await baseQuery(
      `${ENDPOINTS.ARTICLES}/${arg}/comments`
    );

    return commentResult.data
      ? {
          data: {
            article: articleResult.data.article,
            comments: commentResult.data.comments,
          },
        }
      : { error: commentResult.error };
  },
  providesTags: (result) => {
    if (result) {
      const { article } = result;

      return [
        { id: article.slug, type: TAGS.POST },
        { id: article.author.username, type: TAGS.PROFILE },
      ];
    } else {
      return [TAGS.PROFILE];
    }
  },
};

export default getArticleQuery;
