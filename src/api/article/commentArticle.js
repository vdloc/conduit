import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function commentArticle(slug, comment) {
  const configs = {
    method: 'POST',
    isAuthRequired: true,
    body: {
      comment: { body: comment },
    },
  };

  return httpClient(`${ENDPOINTS.ARTICLES}/${slug}/comments`, configs);
}
