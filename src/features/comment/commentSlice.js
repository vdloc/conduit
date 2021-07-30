import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import rootApi from 'services';
import { authDispatch } from 'libs/auth';

const {
  commentArticle: commentArticleMutation,
  getArticleComments: getArticleCommentsQuery,
} = rootApi.endpoints;

const commentSlice = createSlice({
  name: 'comment',
  initialState: { currentValue: '' },
  reducers: {
    setCommentValue: (state, { payload }) => {
      state.currentValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        getArticleCommentsQuery.matchFulfilled,
        getArticleCommentsQuery.matchRejected
      ),
      (state) => {
        state.currentValue = '';
      }
    );
  },
});

export const commentArticle = (slug) => (dispatch, getState) => {
  const state = getState();
  const comment = selectCommentValue(state);

  authDispatch(
    dispatch,
    getState,
    commentArticleMutation.initiate({ slug, comment })
  );
};

export const selectCommentValue = (state) => state.currentValue;
export const { setCommentValue } = commentSlice.actions;

export default commentSlice.reducer;
