import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getArticleComments(slug) {
  return httpClient(`${ENDPOINTS.ARTICLES}/${slug}/comments`);
}
