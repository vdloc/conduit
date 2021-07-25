import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getArticleCommentsQuery = {
  query: (slug) => ({
    url: `${ENDPOINTS.ARTICLES}/${slug}/comments`,
  }),
  providesTags: (result, _error, slug) => {
    if (result) {
      return [
        {
          id: slug,
          type: TAGS.COMMENTS,
        },
        TAGS.COMMENTS,
      ];
    } else {
      return [TAGS.COMMENTS];
    }
  },
};

export default getArticleCommentsQuery;
