import React from 'react';
import { Route } from 'react-router-dom';

import ArticleDetail from '../components/ArticleDetail';
import Editor from '../components/Editor';
import PrivateRoute from 'routes/PrivateRoute';

export default function ArticleRoutes() {
  return (
    <>
      <Route path='/article/:slug'>
        <ArticleDetail />
      </Route>
      <PrivateRoute path='/editor/:slug'>
        <Editor />
      </PrivateRoute>
      <PrivateRoute path='/editor'>
        <Editor />
      </PrivateRoute>
    </>
  );
}
