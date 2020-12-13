import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { AirtimeIcon, BillIcon, TransferIcon } from '../../../assets/svgs';
import { DarkBlue, HeaderText, Orange, White, wp } from '../../components';
import { Row } from '../../components/View';
import Home from './home';
import { dashboardStyles as styles } from './styles';
import Transfers from './transfers';

export default class Dashboard extends Component {
  state = {
    activeSlide: 0,
    currentScreen: 'Transfers',
    render: <Transfers />,
  };

  footerButton(svg, activeSvg, title, active) {
    if (active) {
      return (
        <View style={styles.activeButton}>
          <View style={styles.activeButtonRow}>
            {activeSvg}
            <HeaderText title={title} style={styles.menuTitle} />
          </View>
        </View>
      );
    }
    return <View style={styles.dashboardButton}>{svg}</View>;
  }

  onPress(value) {
    if (value === 'Transfers') {
      this.setState({ currentScreen: value, render: <Transfers /> });
    } else if (value === 'Bills') {
      this.setState({ currentScreen: value, render: <Transfers /> });
    } else if (value === 'Airtime') {
      this.setState({ currentScreen: value, render: <Transfers /> });
    } else {
      this.setState({ currentScreen: value, render: <Home /> });
    }
  }

  render() {
    const { currentScreen, render } = this.state;
    return (
      <View style={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
        <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
          {render}
        </View>
        <Row
          style={[
            styles.dashboardButtonRow,
            currentScreen !== 'Home' && { width: wp(296) },
          ]}>
          <TouchableOpacity onPress={() => this.onPress('Bills')}>
            {this.footerButton(
              <BillIcon fill={White} />,
              <BillIcon fill={Orange} />,
              'Bill Payment',
              currentScreen === 'Bills',
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPress('Transfers')}>
            {this.footerButton(
              <TransferIcon fill={White} />,
              <TransferIcon fill={Orange} />,
              'Transfers',
              currentScreen === 'Transfers',
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPress('Airtime')}>
            {this.footerButton(
              <AirtimeIcon fill={White} />,
              <AirtimeIcon fill={Orange} />,
              'Airtime',
              currentScreen === 'Airtime',
            )}
          </TouchableOpacity>
        </Row>
      </View>
    );
  }
}
