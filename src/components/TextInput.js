import React from 'react';
import { Item, Input as TextInput, Label } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { hp, wp } from './utils';
import { BaliHai, Boticelli } from './Colors';
import { touchId } from '../../assets/images';

const Input = (
  { icon, label, style, containerStyle, value, onChange, keyboardType },
  props,
) => {
  return (
    <View style={[styles.container, icon && styles.iconView, containerStyle]}>
      <Item floatingLabel underline={false} style={[styles.inputContainer]}>
        <Label style={{ fontSize: 13, color: BaliHai }}>{label}</Label>
        <TextInput
          style={[styles.input, icon && styles.iconInput, style]}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          {...props}
        />
      </Item>
      {icon ? (
        <TouchableOpacity style={styles.touchView}>
          <Image source={touchId} style={styles.touchId} resizeMode="contain" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export { Input };

const styles = StyleSheet.create({
  inputContainer: {
    width: wp(328),
    height: hp(52),
    borderColor: 'transparent',
    borderWidth: 0,
  },
  input: {
    // width: wp(328),
    marginTop: -hp(10),
    height: hp(52),
    fontSize: 16,
    borderWidth: 0,
  },
  iconInput: {
    width: wp(290),
    // marginTop: -hp(10),
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: wp(328),
    // paddingLeft: wp(8),
  },
  container: {
    borderWidth: 1,
    paddingTop: hp(8),
    width: wp(328),
    alignSelf: 'center',
    // paddingBottom: hp(5),
    paddingLeft: wp(5),
    height: hp(52),
    borderRadius: 3,
    borderColor: Boticelli,
  },
  touchView: {
    height: hp(52),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(33),
    position: 'absolute',
    right: wp(3),
  },
  touchId: {
    width: wp(20),
    height: hp(28),
  },
});
