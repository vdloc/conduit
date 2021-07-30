import { ENDPOINTS } from '@/constants';

const getTagsQuery = {
  query: () => ENDPOINTS.TAGS,
  transformResponse: (response) => response.tags,
};

export default getTagsQuery;
