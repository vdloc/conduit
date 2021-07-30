import { createQueryTags } from 'utils/query';
import { ENDPOINTS, TAG_TYPES } from '@/constants';

function resultTagsReducer(_result, username) {
  return [{ type: TAG_TYPES.PROFILE, id: username }];
}

const getUserProfileQuery = {
  query: (username) => `${ENDPOINTS.PROFILES}/${username}`,
  transformResponse: (response) => response.profile,
  providesTags: createQueryTags({
    resultTagsReducer,
  }),
};

export default getUserProfileQuery;
