import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ForgotPassword from './screens/authentication/ForgotPassword';
import GetStarted from './screens/authentication/GetStarted';
import Register from './screens/authentication/register';
import ResetStatus from './screens/authentication/ResetStatus';
import SignIn from './screens/authentication/SignIn';
import Dashboard from './screens/dashboard';
import Notifications from './screens/dashboard/Notifications';
import Onboarding from './screens/onboarding';
import Settings from './screens/dashboard/settings';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="onboarding" component={Onboarding} initial />
          <Scene key="get_started" component={GetStarted} />
          <Scene key="sign_in" component={SignIn} />
          <Scene key="forgot_password" component={ForgotPassword} />
          <Scene key="reset_status" component={ResetStatus} />
          <Scene key="register" component={Register} />
          <Scene key="dashboard" component={Dashboard} />
          <Scene key="notifications" component={Notifications} />
          <Scene key="settings" component={Settings} />
        </Scene>
      </Router>
    );
  }
}
