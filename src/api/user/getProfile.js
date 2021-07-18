import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getProfile(username) {
  return httpClient(`${ENDPOINTS.PROFILES}/${username}`);
}
