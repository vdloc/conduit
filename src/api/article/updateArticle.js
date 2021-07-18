import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function updateArticle(
  slug,
  { title, description, body } = {}
) {
  const configs = {
    method: 'PUT',
    isAuthRequired: true,
    body: {
      article: { title, description, body },
    },
  };

  return httpClient(`${ENDPOINTS.ARTICLES}/${slug}`, configs);
}
