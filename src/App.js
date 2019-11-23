import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import {
  WELCOME,
  PROJECTS,
  COMMERCIALPROJECTS,
  EXPERIENCE,
  CONTACT
} from './constants/routes';

import Nav from './components/navigation/Nav';
import Welcome from './components/Welcome';
import ProjectCards from './components/ProjectCards';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CommercialApps from './components/CommercialApps';

const App = () => {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route exact path={WELCOME} component={Welcome} />
        <Route exact path={PROJECTS} component={ProjectCards} />
        <Route exact path={COMMERCIALPROJECTS} component={CommercialApps} />
        <Route exact path={EXPERIENCE} component={Experience} />
        <Route exact path={CONTACT} component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
