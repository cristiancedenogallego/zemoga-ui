import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'loadable-components';

const Home = loadable(() => import('./Home'));

function Routes() {
  return (
    <Switch>
      <Route exact key="home" path="/" component={Home} />
      <Route key="howItsWorks" path="/how-its-works" component={Home} />
    </Switch>
  );
}

export default Routes;
