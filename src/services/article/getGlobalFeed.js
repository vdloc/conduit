import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getGlobalFeedQuery = {
  query: (params) => ({
    url: ENDPOINTS.ARTICLES,
    params: { limit: 10, ...params },
  }),
  providesTags: (result) => {
    if (result) {
      const { articles } = result;
      const tags = articles.map(({ slug }) => ({
        type: TAGS.POST,
        id: slug,
      }));

      return [...tags, { type: TAGS.POST, id: 'FEED' }];
    } else {
      return [{ type: TAGS.POST, id: 'FEED' }];
    }
  },
};

export default getGlobalFeedQuery;
