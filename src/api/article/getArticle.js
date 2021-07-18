import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getArticle(slug) {
  return httpClient(`${ENDPOINTS.ARTICLES}/${slug}`);
}
