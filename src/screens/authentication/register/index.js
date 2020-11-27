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
import FrameOne from './FrameOne';
import FrameThree from './FrameThree';
import FrameTwo from './FrameTwo';
import { registerStyles as styles } from './styles';

export default class Register extends Component {
  state = {
    scene: 3,
  };

  goToScreen = (index) => this.setState({ scene: index });

  render() {
    const frame = () => {
      switch (this.state.scene) {
        case 2: {
          return <FrameTwo proceed={() => this.goToScreen(3)} />;
        }
        case 3: {
          return <FrameThree proceed={() => this.goToScreen(4)} />;
        }
        default: {
          return <FrameOne proceed={() => this.goToScreen(2)} />;
        }
      }
    };
    console.log(this.state.screen);
    return (
      <View style={styles.background}>
        <View style={styles.backIconRow}>
          <BackIcon />
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
