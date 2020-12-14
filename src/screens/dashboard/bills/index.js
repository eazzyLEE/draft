import React, { Component } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { HeaderText, hp, RegularText } from '../../../components';
import { SceneTwo } from './scenes/SceneTwo';
import { SceneOne } from './scenes/SceneOne';
import { billStyles as styles } from './styles';
import { SceneThree } from './scenes/SceneThree';
import { SceneFour } from './scenes/SceneFour';
import { SceneFive } from './scenes/SceneFive';

export default class Bills extends Component {
  state = {
    currentIndex: 4,
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
    if (currentIndex === 0) return hp(256);
    if (currentIndex === 4 || currentIndex === 5) return hp(398);
    return hp(544);
  };

  progress = (screen) => this.setState({ currentIndex: screen });

  render() {
    const { currentIndex, keyboardView } = this.state;
    const TransferSource = (
      <>
        <HeaderText
          title="Select account to pay bills from"
          style={styles.sendText}
        />
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

    // const handleHeight = () => {
    //   // const { currentIndex } = this.state;
    //   if (currentIndex !== 0 && currentIndex !== 4) return hp(544);
    //   return hp(256);
    // };

    const handleView = () => {
      switch (currentIndex) {
        case 1:
          return <SceneOne progress={() => this.progress(2)} />;
        case 2:
          return <SceneTwo progress={() => this.progress(3)} />;
        case 3:
          return <SceneThree progress={() => this.progress(4)} />;
        case 4:
          return <SceneFour progress={() => this.progress(5)} />;
        case 5:
          return <SceneFive progress={() => this.progress(5)} />;
        default:
          return TransferSource;
      }
    };

    return (
      <View
        style={[
          styles.background,
          { height: this.handleHeight() },
          !keyboardView && { bottom: hp(120) }, // currentIndex !== 4 && // currentIndex !== 3 &&
        ]}>
        <Divider style={styles.bottomTrigger} />

        {handleView()}
      </View>
    );
  }
}
