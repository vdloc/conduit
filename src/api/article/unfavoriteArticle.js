import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function favoriteArticle(slug) {
  const configs = {
    method: 'DELETE',
    isAuthRequired: true,
    body: {},
  };

  return httpClient(`${ENDPOINTS.ARTICLES}/${slug}/favorite`, configs);
}
