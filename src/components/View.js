import React from 'react';
import { StyleSheet, View } from 'react-native';
import { White } from './Colors';
import { hp, wp } from './utils';

export const MainView = (props) => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
    width: wp(360),
    marginTop: hp(49),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
});
