import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import SplashPage from './splash/splash_page';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import PlantIndexContainer from './plants/plant_index_container';
import PlantShowContainer from './plants/plant_show_container';
import GardenContainer from './garden/garden_container';

const App = () => (
  <div className='plantr'>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/plants" component={PlantIndexContainer} />
      <ProtectedRoute exact path="/plants/:plantId" component={PlantShowContainer} />
      <ProtectedRoute exact path="/garden/:userId" component={GardenContainer} />
    </Switch>
  </div>
);

export default App;