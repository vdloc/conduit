import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getCurrentUser() {
  const configs = {
    isAuthRequired: true,
  };

  return httpClient(ENDPOINTS.USER, configs);
}
