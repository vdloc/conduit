import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const updateArticleMutation = {
  query: ({ slug, data }) => ({
    method: 'PUT',
    url: `${ENDPOINTS.ARTICLES}/${slug}`,
    body: {
      article: data,
    },
  }),
  invalidatesTags: (result, error, args) => {
    if (result) {
      const { slug } = args;
      return [{ type: TAGS.POST, id: slug }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default updateArticleMutation;
