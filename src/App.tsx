import React from "react";
import LandingPage from "./components/Landing/index";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SideBar from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" exact component={SideBar} />
      </Router>
    </>
  );
}

export default App;
