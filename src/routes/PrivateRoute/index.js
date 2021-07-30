import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from 'features/user/userSlice';

export default function PrivateRoute({ children, ...props }) {
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser) {
    return <Route {...props}>{children}</Route>;
  } else {
    return <Redirect to='/' />;
  }
}
