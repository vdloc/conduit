import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const unfavoriteArticleMutation = {
  query: (slug) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.ARTICLES}/${slug}/favorite`,
  }),
  invalidatesTags: (result, error, arg) => {
    if (result) {
      return [{ type: TAGS.POST, id: arg }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default unfavoriteArticleMutation;
