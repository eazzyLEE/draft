import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  AirtimeIcon,
  BillIcon,
  ButtonPlus,
  ReturnHome,
  TransferIcon,
} from '../../../assets/svgs';
import {
  DarkBlue,
  HeaderText,
  hp,
  Orange,
  RegularText,
  White,
  wp,
} from '../../components';
import { BatchedView, Row } from '../../components/View';
import Home from './home';
import { dashboardStyles as styles } from './styles';
import Transfers from './transfers';

export default class Dashboard extends Component {
  state = {
    activeSlide: 0,
    currentScreen: 'Transfers',
    transferPosition: 0,
    batchLength: 0,
  };

  setPosition = (value) => this.setState({ transferPosition: value });

  updateBatch = () =>
    this.setState({
      batchLength: this.state.batchLength + 1,
      transferPosition: 0,
    });

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
      this.setState({ currentScreen: value });
    } else if (value === 'Bills') {
      this.setState({ currentScreen: value });
    } else if (value === 'Airtime') {
      this.setState({ currentScreen: value });
    } else {
      this.setState({ currentScreen: value });
    }
  }

  render() {
    const { batchLength, currentScreen, transferPosition } = this.state;
    const newTransfer = transferPosition === 3;
    const CurrentScreenView = () => {
      switch (currentScreen) {
        case 'Transfers':
          return (
            <Transfers
              position={(value) => this.setPosition(value)}
              batchLength={this.state.batchLength}
            />
          );
        default:
          return <Home />;
      }
    };

    return (
      <View style={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
        <Row style={styles.topNavRow}>
          <TouchableOpacity style={styles.return}>
            <ReturnHome />
          </TouchableOpacity>

          {newTransfer && !batchLength ? (
            <Row style={styles.navRow}>
              <RegularText
                title="New Transfer"
                style={styles.newTransferText}
              />
              <TouchableOpacity
                style={styles.return}
                onPress={() => this.updateBatch()}>
                <ButtonPlus fill={Orange} />
              </TouchableOpacity>
            </Row>
          ) : null}
        </Row>

        {batchLength > 0 ? (
          <ScrollView style={{ position: 'absolute', top: hp(15) }}>
            <BatchedView />
          </ScrollView>
        ) : null}

        <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
          {CurrentScreenView()}
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
