import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

export default function AuthRoutes() {
  return (
    <>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
    </>
  );
}
