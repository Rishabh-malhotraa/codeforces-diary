import React from 'react';
import './App.css';
import LandingPage from './components/Landing/index';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/viz" exact component={Dashboard} />
        <Redirect to="/" />
      </Router>
    </>
  );
}

export default App;
