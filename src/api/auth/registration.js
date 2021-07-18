import httpClient from '../httpClient';
import ENDPOINTS from '../endpoints';

export default async function registration({ username, email, password } = {}) {
  const configs = {
    method: 'POST',
    body: { user: { username, email, password } },
  };

  return httpClient(ENDPOINTS.REGISTRATION, configs);
}
