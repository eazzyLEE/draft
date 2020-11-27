import React, { Component } from 'react';
import { View } from 'react-native';
import { HeaderText } from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { registerStyles as styles } from './styles';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.backIconRow}>
          <BackIcon />
          <HeaderText title="Get Started" style={styles.headerText} />
        </View>
      </View>
    );
  }
}
