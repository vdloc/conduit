import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const favoriteArticleMutation = {
  query: (slug) => ({
    method: 'POST',
    url: `${ENDPOINTS.ARTICLES}/${slug}/favorite`,
  }),
  invalidatesTags: (result, error, arg) => {
    if (result) {
      return [{ id: arg, type: TAGS.POST }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default favoriteArticleMutation;
