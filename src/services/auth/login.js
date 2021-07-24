import { saveToken } from 'utils/utils';
import ENDPOINTS from '../ENDPOINTS';

const loginMutation = {
  async queryFn(args, _api, _options, baseQuery) {
    const loginResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.LOGIN,
      body: { user: args },
    });
    const token = loginResult?.data?.user?.token;

    if (token) {
      saveToken(token);
    }

    return loginResult;
  },
};

export default loginMutation;
