import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const unfollowUserMutation = {
  query: (username) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.PROFILES}/${username}/follow`,
  }),
  invalidatesTags: [TAGS.PROFILE, TAGS.SUBSCRIBE_FEED],
};

export default unfollowUserMutation;
