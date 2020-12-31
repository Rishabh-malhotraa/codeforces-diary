import React from "react";
import LandingPage from "./components/Landing/index";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideBar from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={SideBar} />
        </Switch>
        <Redirect to="/" />
      </Router>
    </>
  );
}

export default App;
