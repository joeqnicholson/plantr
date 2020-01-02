import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

//temporary fix, will delete later
import { Route} from 'react-router-dom';

import SplashPage from './splash_page';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import PlantIndexContainer from './plants/plant_index_container';
import PlantShowContainer from './plants/plant_show_container';
import GardenContainer from './garden/garden_container';

const App = () => (
  <div class='plantr'>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/plants" component={PlantIndexContainer} />
      <ProtectedRoute exact path="/plants/:plantId" component={PlantShowContainer} />
      <Route exact path="/garden" component={GardenContainer} />

      {/* I need to figure out how to de-salt the user id in order to properly navigate to garden this way */}
      {/* <AuthRoute exact path="/garden/:userId" component={GardenContainer} /> */}
    </Switch>
  </div>
);

export default App;