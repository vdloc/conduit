import { ENDPOINTS, TAG_TYPES, GENERAL_FEED_TAG } from '../constants';
import { createQueryTags } from 'services/apiUtils';
import { push } from 'connected-react-router';

function resultTagsReducer(_result, _args) {
  return [
    { type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.GLOBAL_FEED },
    { type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.USER_OWNED_FEED },
    { type: TAG_TYPES.POST, id: GENERAL_FEED_TAG.TAG_FEED },
  ];
}

const createArticleMutation = {
  queryFn: async (articleData, { dispatch }, _options, baseQuery) => {
    const createArticleResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.ARTICLES,
      body: {
        article: articleData,
      },
    });
    const article = createArticleResult?.data?.article;

    if (article) {
      dispatch(push(`/article/${article.slug}`));
    }

    return createArticleResult;
  },
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default createArticleMutation;
