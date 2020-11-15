import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/event1'  component={() => { window.open('https://www.eventbrite.ca/e/trail-running-with-coach-pax-from-restore-human-tickets-128174113223?aff=ebdssbdestsearch'); return null;} } />
          <Route path='/event2'  component={() => { window.open('https://www.eventbrite.ca/e/restorative-yoga-tickets-125820904713?aff=ebdssbdestsearch'); return null;} } />
          <Route path='/event3'  component={() => { window.open('https://www.eventbrite.ca/e/hip-hop-flow-tickets-124511167253?aff=ebdssbdestsearch'); return null;} } />
          <Route path='/event4'  component={() => { window.open('https://www.eventbrite.com/e/outdoor-zumba-on-tuesday-nights-tickets-128159074241'); return null;} } />
          <Route path='/event5'  component={() => { window.open('https://www.eventbrite.com/e/virtual-fundraiser-for-san-diego-mountain-biking-association-tickets-128284954753?aff=ebdssbonlinesearch'); return null;} } />

        </Switch>
      </Router>
    </>
  );
}

export default App;
