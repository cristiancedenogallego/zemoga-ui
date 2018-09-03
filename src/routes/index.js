import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'loadable-components';

const Home = loadable(() => import('./Home'));
const HowItsWorks = loadable(() => import('./HowItsWorks'));
const Login = loadable(() => import('./Login'));
const Search = loadable(() => import('./Search'));

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/how-it-works" component={HowItsWorks} />
      <Route path="/login" component={Login} />
      <Route path="/Search" component={Search} />
    </Switch>
  );
}

export default Routes;
