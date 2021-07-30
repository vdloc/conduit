import getGlobalFeedQuery from './getGlobalFeed';
import getSubscribedFeedQuery from './getSubscribeFeed';

const feedEndpoints = {
  endpoints: (builder) => ({
    getGlobalFeed: builder.query(getGlobalFeedQuery),
    getSubscribedFeed: builder.query(getSubscribedFeedQuery),
  }),
};

export default feedEndpoints;
