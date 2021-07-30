import PrivateRoute from 'routes/PrivateRoute';
import React from 'react';
import Setting from '../components/Setting';

export default function UserRoutes() {
  return (
    <PrivateRoute path='/setting'>
      <Setting />
    </PrivateRoute>
  );
}
