import { push } from 'connected-react-router';
import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, TAG_TYPES } from 'services/constants';

function resultTagsReducer(_result, args) {
  const { slug } = args;

  return [{ type: TAG_TYPES.POST, id: slug }];
}

const updateArticleMutation = {
  queryFn: async ({ slug, data }, { dispatch }, _options, baseQuery) => {    
    const updateArticleResult = await baseQuery({
      method: 'POST',
      url: `${ENDPOINTS.ARTICLES}/${slug}`,
      body: {
        article: data,
      },
    });
    const article = updateArticleResult?.data?.article;

    if (article) {
      dispatch(push(`/article/${article.slug}`));
    }

    return updateArticleResult;
  },
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default updateArticleMutation;
