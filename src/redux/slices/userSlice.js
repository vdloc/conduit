import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUserInfo(_state, action) {
      return action.payload;
    },
    updateUserInfo(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo, updateUserInfo } = userSlice.actions;
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;
