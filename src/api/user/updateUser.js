import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function updateUser(updatedData) {
  const configs = {
    method: 'PUT',
    body: { user: updatedData },
    isAuthRequired: true,
  };

  return httpClient(ENDPOINTS.USER, configs);
}
