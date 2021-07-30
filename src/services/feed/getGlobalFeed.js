import { ENDPOINTS, TAG_TYPES, GENERAL_FEED_TAG } from '@/constants';
import { createQueryTags } from 'utils/query';

function resultTagsReducer(result, args = {}) {
  const { favorited, author, tag } = args;
  const { articles } = result;
  const tags = articles.map(({ slug }) => ({
    type: TAG_TYPES.POST,
    id: slug,
  }));

  if (!favorited && !author && !tag) {
    tags.push({ type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.GLOBAL_FEED });
  } else {
    if (favorited) {
      tags.push({ type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.FAVORITED_FEED });
    }

    if (author) {
      tags.push({ type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.USER_OWNED_FEED });
    }

    if (tag) {
      tags.push({ type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.TAG_FEED });
    }
  }

  return tags;
}

const getGlobalFeedQuery = {
  query: (params) => ({
    url: ENDPOINTS.ARTICLES,
    params: { limit: 10, ...params },
  }),
  providesTags: createQueryTags({
    resultTagsReducer,
  }),
};

export default getGlobalFeedQuery;
