import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export async function unfollowUser(username) {
  const configs = {
    isAuthRequired: true,
    method: 'DELETE',
    body: {},
  };

  return httpClient(`${ENDPOINTS.PROFILES}/${username}/follow`, configs);
}
