import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'containers/LoginPage';
import RegisterPage from 'containers/RegisterPage';
import HomePage from 'containers/HomePage';
import ProfilePage from 'containers/ProfilePage';
import SettingsPage from 'containers/SettingPage';
import ArticlePage from 'containers/ArticlePage';
import EditorPage from 'containers/EditorPage';
import { useGetCurrentUserQuery } from 'services/api';
import { useEffect } from 'react';
import { setUserInfo } from 'redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import { getToken } from 'utils/utils';

function App() {
  const dispatch = useDispatch();
  const token = getToken();
  const { data } = useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data.user));
    }
  }, [data]);

  return (
    <div className='App'>
      <Header />
      <Switch>
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
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
