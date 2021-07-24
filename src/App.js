import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function App() {
  const dispatch = useDispatch();
  const { data } = useGetCurrentUserQuery(undefined, {
    skip: !window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY),
  });

  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data.user));
    }
  }, [data]);

  return (
    <div className='App'>
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
