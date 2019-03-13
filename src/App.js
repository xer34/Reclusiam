import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import About from './components/pages/about/about'
import AppLanding from './components/pages/appLanding/appLanding'
import Statistics from './components/pages/statistics/statistics'
import Battletimer from './components/pages/battletimer/battletimer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/appLanding" component={AppLanding} />
            <Route exact path="/mystats/demo" component={Statistics} />
            <Route exact path="/Battletimer/demo" component={Battletimer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
