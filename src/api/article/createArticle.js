import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function createArticle({
  title,
  description,
  body,
  tagList,
} = {}) {
  const configs = {
    method: 'POST',
    isAuthRequired: true,
    body: {
      article: { title, description, body, tagList },
    },
  };

  return httpClient(ENDPOINTS.ARTICLES, configs);
}
