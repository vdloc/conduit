import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getGlobalFeed(params) {
  const configs = {
    params,
  };

  return httpClient(ENDPOINTS.ARTICLES, configs);
}
