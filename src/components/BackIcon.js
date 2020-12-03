import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LeftChevrolet } from '../../assets/svgs';
import { CongressBlue } from './Colors';
import { hp, wp } from './utils';

const BackIcon = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.background}
      onPress={onPress || (() => Actions.pop())}>
      <LeftChevrolet />
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  background: {
    backgroundColor: CongressBlue,
    width: wp(32),
    height: hp(32),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
