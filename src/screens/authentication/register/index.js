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
import { registerStyles as styles } from './styles';

export default class Register extends Component {
  render() {
    // const frame = () =>
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
        <MainView style={styles.mainView}>
          <FrameOne />
          {/* {frame()} */}
        </MainView>
      </View>
    );
  }
}
