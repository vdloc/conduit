import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getUserArticles(params) {
  const configs = {
    isAuthRequired: true,
    params,
  };

  return httpClient(ENDPOINTS.FEED_ARTICLES, configs);
}
