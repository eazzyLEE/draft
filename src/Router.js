import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import GetStarted from './screens/authentication/GetStarted';
import SignIn from './screens/authentication/SignIn';
import Onboarding from './screens/onboarding';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="onboarding" component={Onboarding} initial />
          <Scene key="get_started" component={GetStarted} />
          <Scene key="sign_in" component={SignIn} />
        </Scene>
      </Router>
    );
  }
}
