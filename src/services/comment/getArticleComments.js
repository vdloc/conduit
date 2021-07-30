import { ENDPOINTS, TAG_TYPES } from '@/constants';
import { createQueryTags } from 'utils/query';

function resultTagsReducer(_result, slug) {
  return [{ id: slug, type: TAG_TYPES.POST_COMMENTS }];
}

const getArticleCommentsQuery = {
  query: (slug) => ({
    url: `${ENDPOINTS.ARTICLES}/${slug}/comments`,
  }),
  transformResponse: (response) => response.comments,
  providesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: [TAG_TYPES.POST_COMMENTS],
  }),
};

export default getArticleCommentsQuery;
