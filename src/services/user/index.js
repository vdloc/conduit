import getCurrentUserQuery from './getCurrentUser';
import updateUserMutation from './updateUser';

const userEndpoints = {
  endpoints: (builder) => ({
    getCurrentUser: builder.query(getCurrentUserQuery),
    updateUser: builder.mutation(updateUserMutation),
  }),
};

export default userEndpoints;
