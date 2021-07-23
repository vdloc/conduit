import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const getUserProfileQuery = {
  query: (username) => `${ENDPOINTS.PROFILES}/${username}`,
  providesTags: [TAGS.PROFILE],
};

export default getUserProfileQuery;
