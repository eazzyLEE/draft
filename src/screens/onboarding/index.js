import React, { Component } from 'react';
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import * as Colors from '../../components/Colors';
import {
  firstOnboarding,
  secondOnboarding,
  thirdOnboarding,
} from '../../../assets/images';
import { ParagraphText } from '../../components';

const slides = [
  {
    key: 'first',
    title: 'A Giftcard for Everyone',
    text:
      'Need an iTunes card? Got steam Steam? Buy or Sell Giftcard at the snap of a finger.',
    source: firstOnboarding,
  },
  {
    key: 'second',
    title: 'Refill',
    text:
      'Overloading Airtime Is Not The End Of The World. Swap your airtime for cash + plenty more.',
    source: secondOnboarding,
  },
  {
    key: 'third',
    title: 'Experience Bitcoin like Never before',
    text:
      'Buy, Sell, Send, Receive, Store or Spend. Patricia lets you do the most with your Bitcoin.',
    source: thirdOnboarding,
  },
];

export default class Onboarding extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  componentWillUnmount() {
    StatusBar.setBackgroundColor(Colors.DarkBlue);
    StatusBar.setBarStyle('light-content');
  }

  _renderItem = ({ item }) => (
    <View>
      <Image
        source={item.source}
        style={styles.patriciaLogo}
        resizeMode="contain"
      />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => Actions.create_account({ type: 'reset' })}>
          <ParagraphText
            title="Create an account"
            style={styles.createAccountText}
          />
        </TouchableOpacity>
        {/* <Button
          title="Sign In"
          style={styles.signButton}
          buttonStyle={styles.signInButton}
          onPress={() => Actions.sign_in({ type: 'reset' })}
        /> */}
      </View>
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        showNextButton={false}
        showDoneButton={false}
      />
    );
  }
}
