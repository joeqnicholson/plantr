import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SplashPage from './splash_page';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'

const App = () => (
  <div class='plantr'>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;