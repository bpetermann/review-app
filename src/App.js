import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Locations from './components/pages/Locations';
import ItemDetail from './components/Locations/ItemDetail';

import { auth, provider } from './firebase/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';

import DUMMY_LOCATIONS from './database/locations';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signInHandler = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsLoggedIn(true);
    });
  };

  const logoutHandler = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <React.Fragment>
      <Header
        userLogin={signInHandler}
        userLogout={logoutHandler}
        isLoggedIn={isLoggedIn}
      />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/overview'>
          <Locations locations={DUMMY_LOCATIONS} />
        </Route>
        <Route path='/titles/:itemId'>
          <ItemDetail isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
