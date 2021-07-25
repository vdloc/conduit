import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getArticleQuery = {
  query: (slug) => ({
    url: `${ENDPOINTS.ARTICLES}/${slug}`,
  }),
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
