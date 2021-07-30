import { createQueryTags } from '@/utils/query';
import { ENDPOINTS, TAG_TYPES } from '@/constants';

function resultTagsReducer(_result, args) {
  const { slug } = args;

  return [{ id: slug, type: TAG_TYPES.POST_COMMENTS }];
}

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
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default commentArticleMutation;
