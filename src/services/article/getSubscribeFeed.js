import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getSubscribedFeedQuery = {
  query: (params) => ({
    url: ENDPOINTS.FEED_ARTICLES,
    params: { limit: 10, ...params },
  }),
  providesTags: (result) => {
    if (result) {
      const { articles } = result;
      const tags = articles.map(({ slug }) => ({ type: TAGS.POST, id: slug }));

      return [...tags, { type: TAGS.POST, id: 'FEED' }];
    }
  },
};

export default getSubscribedFeedQuery;
