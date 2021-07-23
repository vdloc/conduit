import ENDPOINTS from 'services/ENDPOINTS';
import TAGS from 'services/TAGS';

const deleteArticleMutation = {
  query: (slug) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.ARTICLES}/${slug}`,
  }),
  invalidatesTags: (_result, _error, arg) => [{ id: arg, type: TAGS.POST }],
};

export default deleteArticleMutation;
