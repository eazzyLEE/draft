import React, { Component } from 'react';
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import ProgressCircle from 'react-native-progress-circle';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import * as Colors from '../../components/Colors';
import {
  firstOnboarding,
  secondOnboarding,
  thirdOnboarding,
} from '../../../assets/images';
import { ParagraphText } from '../../components';
import { RightChevrolet } from '../../../assets/svgs';

const slides = [
  {
    key: 'first',
    title: 'Sending money just got simpler and faster',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Id in tincidunt venenatis etiam.',
    source: firstOnboarding,
  },
  {
    key: 'second',
    title: 'Paying bills with zero hassle is all you need',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Id in tincidunt venenatis etiam.',
    source: secondOnboarding,
  },
  {
    key: 'third',
    title: 'Buy airtime and stay connected always',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Id in tincidunt venenatis etiam.',
    source: thirdOnboarding,
  },
];

export default class Onboarding extends Component {
  state = {
    page: 1,
  };

  _renderItem = ({ item }) => (
    <View style={styles.background}>
      <Image
        source={item.source}
        style={styles.onboardingImage}
        resizeMode="cover"
      />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => Actions.get_started({ type: 'reset' })}>
          <ParagraphText title="Get Started" style={styles.createAccountText} />
        </TouchableOpacity>
      </View>
    </View>
  );

  _renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <ProgressCircle
          percent={(this.state.page / 3) * 100}
          radius={40}
          borderWidth={3}
          color={Colors.Orange}
          shadowColor={Colors.Denim}
          bgColor={Colors.DarkBlue}>
          <View style={styles.nextButton}>
            <RightChevrolet />
          </View>
        </ProgressCircle>
      </View>
    );
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={Colors.DarkBlue} barStyle="light-content" />
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.dotStyle}
          showNextButton={true}
          showDoneButton={false}
          renderNextButton={this._renderNextButton}
          onSlideChange={(index) => this.setState({ page: index + 1 })}
        />
      </>
    );
  }
}
