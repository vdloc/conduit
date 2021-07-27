import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, TAG_TYPES } from '../constants';

function resultTagsReducer(result) {
  const { user: { username = '' } = {} } = result;

  return username ? [{ type: TAG_TYPES.PROFILE, id: username }] : [];
}

const getCurrentUserQuery = {
  query: () => ENDPOINTS.USER,
  providesTags: createQueryTags({ resultTagsReducer }),
};

export default getCurrentUserQuery;
