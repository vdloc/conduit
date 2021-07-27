import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import rootApi from 'services/api';

const { endpoints } = rootApi;
const mutateHomeSettingEndpointsNames = ['login', 'register', 'deleteArticle'];
const mutateHomeSettingStateEndpoints = Object.entries(endpoints)
  .filter(([name]) => mutateHomeSettingEndpointsNames.includes(name))
  .flatMap(([_name, endpoint]) => [
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  ]);
const initialState = {
  home: {
    activeTabId: 1,
    subscribedFeedOffset: 0,
    globalFeedOffset: 0,
    tagFeedOffset: 0,
    tagName: '',
  },
  profile: {
    activeTabId: 0,
    ownFeedOffset: 0,
    favoriteFeedOffset: 0,
  },
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setHomePageActiveTabId(state, action) {
      state.home.activeTabId = action.payload;
    },
    setGlobalFeedOffset(state, action) {
      state.home.globalFeedOffset = action.payload;
    },
    setSubscribedFeedOffset(state, action) {
      state.home.subscribedFeedOffset = action.payload;
    },
    setTagFeedOffset(state, action) {
      state.home.tagFeedOffset = action.payload;
    },
    setTagName(state, action) {
      state.home.tagName = action.payload;
    },
    setProfilePageActiveTabId(state, action) {
      state.profile.activeTabId = action.payload;
    },
    setOwnFeedOffset(state, action) {
      state.profile.ownFeedOffset = action.payload;
    },
    setFavoriteFeedOffset(state, action) {
      state.profile.favoriteFeedOffset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(...mutateHomeSettingStateEndpoints), (state) => {
      state.home.activeTabId = 0;
    });

    builder.addMatcher(isSignOutAction, (state) => {
      Object.assign(state, initialState);
    });
  },
});

function isSignOutAction(action) {
  return action.type.endsWith('signOut');
}

export const {
  setHomePageActiveTabId,
  setGlobalFeedOffset,
  setSubscribedFeedOffset,
  setTagFeedOffset,
  setTagName,
  setProfilePageActiveTabId,
  setOwnFeedOffset,
  setFavoriteFeedOffset,
  resetSettings,
} = settingSlice.actions;

export const selectHomePageActiveTabId = (state) =>
  state.setting.home.activeTabId;
export const selectGlobalFeedOffset = (state) =>
  state.setting.home.globalFeedOffset;
export const selectSubscribedFeedOffset = (state) =>
  state.setting.home.subscribedFeedOffset;
export const selectTagFeedOffset = (state) => state.setting.home.tagFeedOffset;
export const selectTagName = (state) => state.setting.home.tagName;
export const selectProfilePageActiveTabId = (state) =>
  state.setting.profile.activeTabId;
export const selectOwnFeedOffset = (state) =>
  state.setting.profile.ownFeedOffset;
export const selectFavoriteFeedOffset = (state) =>
  state.setting.profile.favoriteFeedOffset;

export default settingSlice.reducer;
