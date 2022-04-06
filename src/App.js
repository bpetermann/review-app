import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Locations from './components/pages/Locations';
import ItemDetail from './components/Locations/ItemDetail';
import AddLocation from './components/Locations/AddLocation';

import DUMMY_LOCATIONS from './database/locations';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <React.Fragment>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/add'>
          <AddLocation />
        </Route>
        <Route path='/overview'>
          <Locations locations={DUMMY_LOCATIONS} />
        </Route>
        <Route path='/titles/:itemId'>
          <ItemDetail />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
