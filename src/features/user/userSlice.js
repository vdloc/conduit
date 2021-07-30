import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import rootApi from 'services';

const { endpoints } = rootApi;
const mutateUserStateEndpointsNames = [
  'updateUser',
  'getCurrentUser',
  'login',
  'register',
];
const mutateUserStateEndpoints = Object.entries(endpoints)
  .filter(([name]) => mutateUserStateEndpointsNames.includes(name))
  .map(([_name, endpoint]) => endpoint.matchFulfilled);

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    signOut(_state) {
      return null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(...mutateUserStateEndpoints),
      (_state, { payload }) => {
        return payload.user;
      }
    );
  },
});

export const { signOut } = userSlice.actions;
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;
