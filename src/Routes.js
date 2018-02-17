import React from 'react';
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'

// ROUTES
import Messenger from 'containers/Messenger'
import PageNotFound from 'containers/PageNotFound'


export default () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/messenger" />)} />
    <Route path="/messenger/:id?" component={Messenger} />
    <Route component={PageNotFound} />
  </Switch>
);
