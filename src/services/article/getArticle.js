import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, TAG_TYPES } from 'services/constants';

function resultTagsReducer(article, _slug) {
  return [
    { id: article.slug, type: TAG_TYPES.POST },
    { id: article.author.username, type: TAG_TYPES.PROFILE },
  ];
}

const getArticleQuery = {
  query: (slug) => ({
    url: `${ENDPOINTS.ARTICLES}/${slug}`,
  }),
  transformResponse: (response) => response.article,
  providesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: [TAG_TYPES.PROFILE],
  }),
};

export default getArticleQuery;
