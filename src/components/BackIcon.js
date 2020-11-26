import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LeftChevrolet } from '../../assets/svgs';
import { CongressBlue } from './Colors';
import { hp, wp } from './utils';

const BackIcon = () => {
  return (
    <TouchableOpacity style={styles.background}>
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
