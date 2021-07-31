import { getToken } from 'utils/storage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toast from 'components/Toast';
import { Loader } from 'features/loader';
import AppRoutes from 'routes';
import { useGetCurrentUserQuery } from 'services';

function App() {
  const token = getToken();

  useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <div className='App'>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
      <Toast />
      <Loader />
    </>
  );
}

export default App;
