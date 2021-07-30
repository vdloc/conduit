import loginMutation from './login';
import registerMutation from './register';

const authEndpoints = {
  endpoints: (builder) => ({
    login: builder.mutation(loginMutation),
    register: builder.mutation(registerMutation),
  }),
};

export default authEndpoints;
