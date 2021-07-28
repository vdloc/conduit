import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import SettingsPage from 'pages/SettingPage';
import ArticlePage from 'pages/ArticlePage';
import EditorPage from 'pages/EditorPage';
import PrivateRoute from '../PrivateRoute';

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
