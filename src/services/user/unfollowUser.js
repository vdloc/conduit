import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, TAG_TYPES } from 'services/constants';

function resultTagsReducer(_result, username) {
  return [{ type: TAG_TYPES.PROFILE, id: username }];
}

const unfollowUserMutation = {
  query: (username) => ({
    method: 'DELETE',
    url: `${ENDPOINTS.PROFILES}/${username}/follow`,
  }),
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default unfollowUserMutation;
