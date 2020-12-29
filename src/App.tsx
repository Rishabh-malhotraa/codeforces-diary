import React from "react";
import "./App.css";
import LandingPage from "./components/Landing/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/PieVictory";
import SideBar from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/viz" exact component={Dashboard} />
        <Route path="/dashboard" exact component={SideBar} />
      </Router>
    </>
  );
}

export default App;
