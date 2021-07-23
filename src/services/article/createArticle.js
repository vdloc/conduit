import TAGS from '../TAGS';
import ENDPOINTS from '../ENDPOINTS';

const createArticleMutation = {
  query: (articleData) => ({
    method: 'POST',
    url: ENDPOINTS.ARTICLES,
    body: {
      article: articleData,
    },
  }),
  invalidatesTags: (result, error) => {
    if (result) {
      return [{ type: TAGS.POST, id: 'FEED' }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default createArticleMutation;
