import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import ArticleRoutes from 'features/article/routes';
import AuthRoutes from 'features/auth/routes';
import FeedRoutes from 'features/feed/routes';
import ProfileRoutes from 'features/profile/routes';
import UserRoutes from 'features/user/routes';

export default function AppRoutes() {
  return (
    <>
      <AuthRoutes />
      <FeedRoutes />
      <ArticleRoutes />
      <ProfileRoutes />
      <UserRoutes />
      <Redirect to='/' />
    </>
  );
}
