import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Onboarding from './onboarding';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="onboarding" component={Onboarding} initial />
        </Scene>
      </Router>
    );
  }
}
