/* eslint-disable react/no-array-index-key */
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const Home = lazy(() => import('./pages/Home'));

export default (
  <Router>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </Suspense>
  </Router>
);
