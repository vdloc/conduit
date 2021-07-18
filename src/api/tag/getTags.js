import ENDPOINTS from '../endpoints';
import httpClient from '../httpClient';

export default async function getTags() {
  return httpClient(ENDPOINTS.TAGS);
}
