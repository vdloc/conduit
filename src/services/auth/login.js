import ENDPOINTS from '../ENDPOINTS';

const loginMutation = {
  async queryFn(args, api, _, baseQuery) {
    const loginResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.LOGIN,
      body: { user: args },
    });
    const token = loginResult?.data?.user?.token;

    if (token) {
      window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
    }

    return loginResult;
  },
};

export default loginMutation;
