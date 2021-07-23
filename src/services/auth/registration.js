import ENDPOINTS from '../ENDPOINTS';

const registerMutation = {
  query: ({ email, password, username }) => ({
    method: 'POST',
    url: ENDPOINTS.REGISTRATION,
    body: { user: { email, password, username } },
  }),
  async queryFn(args, api, options, baseQuery) {
    const loginResult = await baseQuery({
      method: 'POST',
      url: ENDPOINTS.REGISTRATION,
      body: { user: args },
    });
    const token = loginResult?.data?.user?.token;

    if (token) {
      window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
    }

    return loginResult;
  },
};

export default registerMutation;
