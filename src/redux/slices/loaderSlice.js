import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    displayLoader(state) {
      state = true;
    },
    hideLoader(state) {
      state = false;
    },
  },
});

export const { displayLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
