import { push } from 'connected-react-router';
import { createQueryTags } from 'services/apiUtils';
import { welcomeToast } from 'utils/toast';
import { saveToken } from 'utils/utils';
import { ENDPOINTS, TAG_TYPES } from '../constants';

// When login is success (have result),
// re-invalidate all failed before requests which are marked with UNAUTHORIZED tag.
function resultTagsReducer() {
  return [{ type: TAG_TYPES.UNAUTHORIZED }];
}

const loginMutation = {
  queryFn: async (args, { dispatch }, _options, baseQuery) => {
    const loginResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.LOGIN,
      body: { user: args },
    });
    const user = loginResult?.data?.user;

    if (user) {
      const token = user?.token;

      token && saveToken(token);
      dispatch(push({ pathname: '/' }));
      welcomeToast(`Welcome back ${user.username}! 💋`, {
        toastId: 'Login success',
      });
    }

    return loginResult;
  },
  invalidatesTags: createQueryTags({ resultTagsReducer }),
};

export default loginMutation;
