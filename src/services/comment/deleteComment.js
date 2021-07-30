import { ENDPOINTS, TAG_TYPES } from '@/constants';
import { createQueryTags } from 'utils/query';

function resultTagsReducer(_result, args) {
  const { slug } = args;

  return [{ id: slug, type: TAG_TYPES.POST_COMMENTS }];
}

const deleteCommentMutation = {
  query: ({ slug, id }) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.ARTICLES}/${slug}/comments/${id}`,
  }),
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default deleteCommentMutation;
