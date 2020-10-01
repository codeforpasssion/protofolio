import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/protofolio">
          <Me user={user} />
        </Route>
        <Route path="/protofolio/projects">
          <Projects user={user} />
        </Route>
        <Route path="/protofolio/work">
          <Work user={user} />
        </Route>
        <Route path="/protofolio/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;