import { push } from 'connected-react-router';
import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, TAG_TYPES } from 'services/constants';

function resultTagsReducer(_result, user) {
  return [{ type: TAG_TYPES.PROFILE, id: user.username }];
}

const updateUserMutation = {
  queryFn: async (updatedUser, { dispatch }, _options, baseQuery) => {
    const updateUserResult = await baseQuery({
      method: 'PUT',
      body: { user: updatedUser },
      url: ENDPOINTS.USER,
    });
    const user = updateUserResult?.data?.user;
    if (user) {
      dispatch(push(`/@${user.username}`));
    }

    return updateUserResult;
  },
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default updateUserMutation;
