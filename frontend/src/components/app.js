import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SplashPage from './splash_page';

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={SplashPage} />
  </Switch>
);

export default App;