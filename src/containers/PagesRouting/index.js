import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import HomePage from '../HomePage';
import ProfilePage from '../ProfilePage';
import SettingsPage from '../SettingPage';
import ArticlePage from '../ArticlePage';
import EditorPage from '../EditorPage';
import PrivateRoute from 'components/PrivateRoute';

export default function PagesRouting() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <RegisterPage />
      </Route>
      <PrivateRoute path='/setting'>
        <SettingsPage />
      </PrivateRoute>
      <PrivateRoute path='/editor/:slug'>
        <EditorPage />
      </PrivateRoute>
      <PrivateRoute path='/editor'>
        <EditorPage />
      </PrivateRoute>
      <Route path='/article/:slug'>
        <ArticlePage />
      </Route>
      <Route path='/@:username'>
        <ProfilePage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}
