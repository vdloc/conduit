import { push } from 'connected-react-router';
import { welcomeToast } from 'utils/toast';
import { saveToken } from 'utils/utils';
import { ENDPOINTS } from '../constants';

const registerMutation = {
  queryFn: async (args, { dispatch }, _options, baseQuery) => {
    const loginResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.REGISTER,
      body: { user: args },
    });
    const user = loginResult?.data?.user;

    if (user) {
      const token = user?.token;

      token && saveToken(token);
      dispatch(push({ pathname: '/' }));
      welcomeToast(`Welcome ${user.username}! 😍`, {
        toastId: 'Register success',
      });
    }

    return loginResult;
  },
};

export default registerMutation;
