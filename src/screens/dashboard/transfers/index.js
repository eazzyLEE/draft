import React, { Component } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { HeaderText, hp, RegularText } from '../../../components';
import { CurrentScreenOne } from './Current';
import { transferStyles as styles } from './styles';
import { SceneTwo } from './utils';

export default class Transfers extends Component {
  state = {
    currentIndex: 2,
    keyboardView: false,
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }

  keyboardDidShow = () => {
    this.setState({ keyboardView: true });
  };

  keyboardDidHide = () => {
    this.setState({ keyboardView: false });
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  handleHeight = () => {
    const { currentIndex } = this.state;
    if (currentIndex !== 0) return hp(398);
    return hp(256);
  };

  progress = (screen) => this.setState({ currentIndex: screen });

  render() {
    const { currentIndex, keyboardView } = this.state;
    const TransferSource = (
      <>
        <HeaderText title="Send Money from?" style={styles.sendText} />
        <Divider style={styles.mainDivider} />

        <TouchableOpacity
          style={styles.accountRow}
          onPress={() => this.setState({ currentIndex: 1 })}>
          {/* this.handleChange('currentIndex', 1)}> */}
          <View>
            <HeaderText title="Savings Account" style={styles.accountName} />
            <RegularText title="0108000780" style={styles.accountNumber} />
          </View>
          <HeaderText title="N7,100,030" style={styles.amount} />
        </TouchableOpacity>
        <Divider style={styles.subDivider} />
        <TouchableOpacity style={styles.accountRow}>
          <View>
            <HeaderText title="Current Account" style={styles.accountName} />
            <RegularText title="00093257800" style={styles.accountNumber} />
          </View>
          <HeaderText title="N56,810" style={styles.amount} />
        </TouchableOpacity>
      </>
    );

    const handleView = () => {
      switch (currentIndex) {
        case 1:
          return <CurrentScreenOne progress={() => this.progress(2)} />;
        case 2:
          return <SceneTwo progress={() => this.progress(2)} />;
        default:
          return TransferSource;
      }
    };

    return (
      <View
        style={[
          styles.background,
          { height: this.handleHeight() },
          !keyboardView && { bottom: hp(120) },
        ]}>
        <Divider style={styles.bottomTrigger} />

        {handleView()}
      </View>
    );
  }
}
