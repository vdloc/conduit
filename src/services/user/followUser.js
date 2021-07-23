import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const followUserMutation = {
  query: (username) => ({
    method: 'POST',
    url: `${ENDPOINTS.PROFILES}/${username}/follow`,
  }),
  invalidatesTags: [TAGS.PROFILE, TAGS.SUBSCRIBE_FEED],
};

export default followUserMutation;
