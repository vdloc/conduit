import { useDispatch } from 'react-redux';
import { useGetCurrentUserQuery } from 'services/api';
import { getToken } from 'utils/utils';
import PagesRouting from 'pages/PagesRouting';
import Header from './components/Header';
import Footer from './components/Footer';
import ToastWrapper from 'components/ToastWrapper';
import Loader from 'components/Loader';

function App() {
  const token = getToken();

  useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <div className='App'>
        <Header />
        <PagesRouting />
        <Footer />
      </div>
      <ToastWrapper />
      <Loader />
    </>
  );
}

export default App;
