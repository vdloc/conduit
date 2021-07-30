import followUserMutation from './followUser';
import unfollowUserMutation from './unfollowUser';
import getUserProfileQuery from './getUserProfile';

const profileEndpoints = {
  endpoints: (builder) => ({
    followUser: builder.mutation(followUserMutation),
    unfollowUser: builder.mutation(unfollowUserMutation),
    getUserProfile: builder.query(getUserProfileQuery),
  }),
};

export default profileEndpoints;
