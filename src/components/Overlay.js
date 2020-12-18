import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Overlay as Modal } from 'react-native-elements';
import * as Colors from './Colors';
import { wp } from './utils';

export const Overlay = ({
  height,
  onBackdropPress,
  overlayBackgroundColor,
  render,
  style,
  visible,
  width,
  fullScreen,
}) => {
  return (
    <Modal
      isVisible={visible}
      overlayStyle={[styles.overlay, style]}
      windowBackgroundColor="rgba(0, 0, 0, 0.2)"
      overlayBackgroundColor={Colors.White || overlayBackgroundColor}
      width={width || wp(360)}
      height={height}
      fullScreen={fullScreen}
      onBackdropPress={onBackdropPress}>
      <View>{render}</View>
    </Modal>
  );
};

const Spinner = ({ size, style }) => {
  return (
    <View style={[style, styles.spinnerStyle]}>
      <ActivityIndicator size={size || 'large'} color="#7650FF" />
    </View>
  );
};

export const TransactionLoader = ({ backgroundGradient, style }) => {
  return (
    <View
      style={[
        styles.loader,
        backgroundGradient && { backgroundColor: backgroundGradient },
        style,
      ]}>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 5,
    width: wp(300),
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFC',
    position: 'absolute',
    zIndex: 4,
  },
});
