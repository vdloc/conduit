import { ENDPOINTS, generalFeedTags, TAG_TYPES } from '@/constants';
import { createQueryTags } from 'utils/query';

function resultTagsReducer(_result, slug) {
  return [{ type: TAG_TYPES.POST, id: slug }];
}

const unfavoriteArticleMutation = {
  query: (slug) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.ARTICLES}/${slug}/favorite`,
  }),
  invalidatesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: generalFeedTags,
  }),
};

export default unfavoriteArticleMutation;
