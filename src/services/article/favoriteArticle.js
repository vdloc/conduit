import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, generalFeedTags, TAG_TYPES } from 'services/constants';

function resultTagsReducer(_result, slug) {
  return [{ id: slug, type: TAG_TYPES.POST }];
}

const favoriteArticleMutation = {
  query: (slug) => ({
    method: 'POST',
    url: `${ENDPOINTS.ARTICLES}/${slug}/favorite`,
  }),
  invalidatesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: generalFeedTags,
  }),
};

export default favoriteArticleMutation;
