import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {
  DarkBlue,
  HeaderText,
  Input,
  ParagraphText,
  RegularText,
} from '../../components';
import BackIcon from '../../components/BackIcon';
import { Button } from '../../components/Button';
import { MainView } from '../../components/View';
import { forgotPasswordStyles as styles } from './styles';

export default class ForgotPassword extends Component {
  state = {
    number: '',
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  render() {
    const { number } = this.state;

    return (
      <View style={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
        <View style={styles.backIconRow}>
          <BackIcon />
          <HeaderText title="Forgot Password" style={styles.forgotText} />
        </View>
        <MainView style={styles.mainView}>
          <HeaderText
            title="Enter your mobile number to reset your password"
            style={styles.header}
          />
          <Input
            label="Mobile Number"
            value={number}
            onChange={(value) => this.handleChange('number', value)}
            containerStyle={styles.input}
          />
          <Button
            title="Reset Password"
            style={styles.button}
            onPress={() => Actions.reset_status()}
          />
          <Divider style={styles.divider} />
          <View style={styles.bottomRow}>
            <RegularText
              title="I remember my password"
              style={styles.rememberText}
            />
            <TouchableOpacity onPress={() => Actions.sign_in()}>
              <ParagraphText title="Sign In" style={styles.signIn} />
            </TouchableOpacity>
          </View>
        </MainView>
      </View>
    );
  }
}
