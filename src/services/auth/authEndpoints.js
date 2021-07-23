import loginMutation from './login';
import registerMutation from './registration';

const authEndpoints = {
  endpoints: (builder) => ({
    login: builder.mutation(loginMutation),
    register: builder.mutation(registerMutation),
  }),
};

export default authEndpoints;
