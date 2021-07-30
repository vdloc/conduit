import history from 'app/history';

export function authDispatch(dispatch, getState, action) {
  const state = getState();
  const user = state.user;

  if (!user) {
    history.push('/login');
  } else {
    dispatch(action);
  }
}
