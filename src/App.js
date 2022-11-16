import { Switch, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetups'
import FavoitesPage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
   <div>
    <MainNavigation />
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
   </div>
  );
}

export default App;
