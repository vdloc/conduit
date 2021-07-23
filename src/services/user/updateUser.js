import TAGS from 'services/TAGS';
import ENDPOINTS from '../ENDPOINTS';

const updateUserMutation = {
  query: (updatedUser) => ({
    method: 'PUT',
    body: { user: updatedUser },
    url: ENDPOINTS.USER,
  }),
  invalidatesTags: [TAGS.PROFILE],
};

export default updateUserMutation;
