import { Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetups'
import FavoitesPage from './pages/Favorites'

function App() {
  return (
   <div>
    <Route exact path='/'>
      <AllMeetupsPage />
    </Route>
    <Route exact path='/new-meetups'>
      <NewMeetupsPage />
    </Route>
    <Route exact path='/favorites'>
      <FavoitesPage />
    </Route>
   </div>
  );
}

export default App;
