import React, { Component } from 'react';
import { Image, Keyboard, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { mainLogo } from '../../../assets/images';
import { Lock } from '../../../assets/svgs';
import {
  HeaderText,
  Input,
  ParagraphText,
  RegularText,
} from '../../components';
import { Button } from '../../components/Button';
import { MainView } from '../../components/View';
import { signinStyle as styles } from './styles';

export default class SignIn extends Component {
  state = {
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

  render() {
    const { keyboardView } = this.state;
    return (
      <View style={styles.background}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollBackground}>
          <Image
            source={mainLogo}
            style={styles.mainLogo}
            resizeMode="contain"
          />
          <MainView
            style={[styles.mainView, keyboardView && styles.fullHeight]}>
            <HeaderText title="Hello Firstname" style={styles.leadText} />
            <RegularText
              title="Sign in to your account"
              style={styles.subText}
            />
            <Input label="Email Address" containerStyle={styles.emailInput} />
            <Input
              label="Password"
              containerStyle={styles.passwordInput}
              icon
            />
            <View style={styles.midGrid}>
              <Lock />
              <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => Actions.forgot_password()}>
                <ParagraphText
                  title="Forgot Password"
                  style={styles.forgotText}
                />
              </TouchableOpacity>
              <View style={styles.loginView}>
                <Button title="Sign In" style={styles.logIn} />
              </View>
            </View>
            <View style={styles.dividerRow}>
              <Divider style={styles.firstDivider} />
              <ParagraphText title="OR" style={styles.dividerText} />
              <Divider style={styles.firstDivider} />
            </View>
            <Button
              title="Create a new account"
              light
              style={styles.createAccountButton}
              onPress={() => Actions.register()}
            />
          </MainView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
