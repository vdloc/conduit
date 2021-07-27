import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, GENERAL_FEED_TAG, TAG_TYPES } from 'services/constants';

function resultTagsReducer(result, _slug) {
  const { articles } = result;

  return articles.flatMap(({ slug, author }) => [
    {
      type: TAG_TYPES.POST,
      id: slug,
    },
    {
      type: TAG_TYPES.PROFILE,
      id: author.username,
    },
  ]);
}

const getSubscribedFeedQuery = {
  query: (params) => ({
    url: ENDPOINTS.FEED_ARTICLES,
    params: { limit: 10, ...params },
  }),
  providesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: [
      { type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.SUBSCRIBED_FEED },
      TAG_TYPES.PROFILE,
    ],
  }),
};

export default getSubscribedFeedQuery;
