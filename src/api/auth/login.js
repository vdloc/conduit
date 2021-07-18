import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function login({ email, password } = {}) {
  const configs = {
    method: 'POST',
    body: { user: { email, password } },
  };

  return httpClient(ENDPOINTS.LOGIN, configs);
}
