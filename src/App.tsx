import React from 'react';
import './App.css';
import LandingPage from './components/Landing/index';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import SideBarII from './components/SideBarII';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/viz" exact component={Dashboard} />
        <Route path="/side" exact component={SideBar} />
        <Route path="/sideII" exact component={SideBarII} />
      </Router>
    </>
  );
}

export default App;
