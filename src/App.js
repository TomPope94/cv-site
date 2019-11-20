import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  WELCOME,
  PROJECTS,
  COMMERCIALPROJECTS,
  EXPERIENCE,
  CONTACT
} from "./constants/routes";

import Welcome from "./components/Welcome";
import ProjectCards from "./components/ProjectCards";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CommercialApps from "./components/CommercialApps";

const App = () => {
  return (
    <Router>
      <Route exact path={WELCOME} component={Welcome} />
      <Switch>
        <Route exact path={PROJECTS} component={ProjectCards} />
        <Route exact path={COMMERCIALPROJECTS} component={CommercialApps} />
        <Route exact path={EXPERIENCE} component={Experience} />
        <Route exact path={CONTACT} component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
