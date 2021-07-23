import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const commentArticleMutation = {
  query({ slug, comment }) {
    return {
      method: 'POST',
      url: `${ENDPOINTS.ARTICLES}/${slug}/comments`,
      body: {
        comment: { body: comment },
      },
    };
  },
  invalidatesTags: (result, error, args) => {
    const { slug } = args;

    if (result) {
      return [{ id: slug, type: TAGS.POST }];
    } else {
      return [error?.status === 401 ? TAGS.UNAUTHORIZED : TAGS.UNKNOWN_ERROR];
    }
  },
};

export default commentArticleMutation;
