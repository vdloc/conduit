import { Route } from 'react-router-dom';
import Home from '../components/Home';

export default function FeedRoutes() {
  return (
    <Route exact path='/'>
      <Home />
    </Route>
  );
}
