import followUserMutation from './followUser';
import unfollowUserMutation from './unfollowUser';
import updateUserMutation from './updateUser';

import getCurrentUserQuery from './getCurrentUser';
import getUserProfileQuery from './getUserProfile';

const userEndpoints = {
  endpoints: (builder) => ({
    followUser: builder.mutation(followUserMutation),
    unfollowUser: builder.mutation(unfollowUserMutation),
    updateUser: builder.mutation(updateUserMutation),
    getCurrentUser: builder.query(getCurrentUserQuery),
    getUserProfile: builder.query(getUserProfileQuery),
  }),
};

export default userEndpoints;
