import React from 'react';
import { Route } from 'react-router-dom';
// import classes from './App.module.css';
import Home from './components/Home';
import Header from './components/Header';
import Test from './components/test';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/test'>
        <Test />
      </Route>
      <Footer />
    </React.Fragment>
  );
}

export default App;
