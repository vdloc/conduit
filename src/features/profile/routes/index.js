import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../components/Profile';

export default function ProfileRoutes() {
  return (
    <Route path='/@:username'>
      <Profile />
    </Route>
  );
}
