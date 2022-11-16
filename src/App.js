import { Switch, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetups'
import FavoitesPage from './pages/Favorites'
import Layout from './components/layout/Layout'

function App() {
  return (
   <Layout>
      <Switch>
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoitesPage />
        </Route>
      </Switch>
   </Layout>
  );
}

export default App;
