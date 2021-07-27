import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, generalFeedTags, TAG_TYPES } from 'services/constants';

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
