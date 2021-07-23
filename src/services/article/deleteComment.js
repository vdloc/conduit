import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const deleteCommentMutation = {
  query: ({ slug, id }) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.ARTICLES}/${slug}/comments/${id}`,
    body: {},
  }),
  invalidatesTags: (result, error, args) => {
    const { slug } = args;

    if (result) {
      return [{ id: slug, type: TAGS.POST }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default deleteCommentMutation;
