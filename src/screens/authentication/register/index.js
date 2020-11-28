import React, { Component } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import {
  CuriousBlue,
  DarkBlue,
  HeaderText,
  hp,
  Orange,
  wp,
} from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { MainView } from '../../../components/View';
import FrameFive from './FrameFive';
import FrameFour from './FrameFour';
import FrameOne from './FrameOne';
import FrameSeven from './FrameSeven';
import FrameSix from './FrameSix';
import FrameThree from './FrameThree';
import FrameTwo from './FrameTwo';
import { registerStyles as styles } from './styles';

export default class Register extends Component {
  state = {
    scene: 7,
  };

  goToScreen = (index) => this.setState({ scene: index });

  goBack = () => this.setState({ scene: this.state.scene - 1 });

  render() {
    const frame = () => {
      switch (this.state.scene) {
        case 2: {
          return <FrameTwo proceed={() => this.goToScreen(3)} />;
        }
        case 3: {
          return <FrameThree proceed={() => this.goToScreen(4)} />;
        }
        case 4: {
          return <FrameFour proceed={() => this.goToScreen(5)} />;
        }
        case 5: {
          return <FrameFive proceed={() => this.goToScreen(6)} />;
        }
        case 6: {
          return <FrameSix proceed={() => this.goToScreen(7)} />;
        }
        case 7: {
          return <FrameSeven proceed={() => this.goToScreen(8)} />;
        }
        default: {
          return <FrameOne proceed={() => this.goToScreen(2)} />;
        }
      }
    };
    return (
      <View style={styles.background}>
        <View style={styles.backIconRow}>
          <BackIcon onPress={() => this.goBack()} />
          <HeaderText title="Get Started" style={styles.headerText} />
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={0}
              width={wp(80)}
              height={hp(8)}
              color={Orange}
              borderColor={DarkBlue}
              unfilledColor={CuriousBlue}
              borderRadius={20}
            />
          </View>
        </View>
        <MainView style={styles.mainView}>{frame()}</MainView>
      </View>
    );
  }
}
