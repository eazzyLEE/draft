import React, { Component } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
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
import FrameEight from './FrameEight';
import FrameEleven from './FrameEleven';
import FrameFive from './FrameFive';
import FrameFour from './FrameFour';
import FrameNine from './FrameNine';
import FrameOne from './FrameOne';
import FrameSeven from './FrameSeven';
import FrameSix from './FrameSix';
import FrameTen from './FrameTen';
import FrameThree from './FrameThree';
import FrameTwo from './FrameTwo';
import { registerStyles as styles } from './styles';

export default class Register extends Component {
  state = {
    scene: 1,
  };

  goToScreen = (index) => this.setState({ scene: index });

  goBack = () =>
    this.state.scene > 1
      ? this.setState({ scene: this.state.scene - 1 })
      : Actions.pop();

  render() {
    const { scene } = this.state;

    const frame = () => {
      switch (scene) {
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
        case 8: {
          return <FrameEight proceed={() => this.goToScreen(9)} />;
        }
        case 9: {
          return <FrameNine proceed={() => this.goToScreen(10)} />;
        }
        case 10: {
          return <FrameTen proceed={() => this.goToScreen(11)} />;
        }
        case 11: {
          return <FrameEleven proceed={() => this.goToScreen(11)} />;
        }
        default: {
          return <FrameOne proceed={() => this.goToScreen(2)} />;
        }
      }
    };

    const progress = scene / 11;
    return (
      <View style={styles.background}>
        <View style={styles.backIconRow}>
          <BackIcon onPress={() => this.goBack()} />
          <HeaderText title="Get Started" style={styles.headerText} />
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={progress}
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
