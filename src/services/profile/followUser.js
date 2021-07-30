import { createQueryTags } from 'utils/query';
import { ENDPOINTS, TAG_TYPES } from '@/constants';

function resultTagsReducer(_result, username) {
  return [{ type: TAG_TYPES.PROFILE, id: username }];
}

const followUserMutation = {
  query: (username) => ({
    method: 'POST',
    url: `${ENDPOINTS.PROFILES}/${username}/follow`,
  }),
  invalidatesTags: createQueryTags({
    resultTagsReducer,
    defaultTags: [TAG_TYPES.PROFILE],
  }),
};

export default followUserMutation;
