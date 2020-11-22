import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Colors from './Colors';
import { wp, hp } from './utils';

const HeaderText = ({ style, title }) => (
  <Text style={[styles.headerTextStyle, style]}>{title}</Text>
);

const MenuText = ({ style, title }) => (
  <Text style={[styles.menuTextStyle, style]}>{title}</Text>
);

const MediumText = ({ style, title }) => (
  <Text style={[styles.mediumTextStyle, style]}>{title}</Text>
);

const ParagraphText = ({ onPress, style, title }) => (
  <Text style={[styles.paragraphTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

const BookText = ({ onPress, style, title }) => (
  <Text style={[styles.bookTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

const RegularText = ({ onPress, style, title, ...props }) => (
  <Text style={[styles.regularTextStyle, style]} onPress={onPress} {...props}>
    {title}
  </Text>
);

const RegularDouble = ({ onPress, style, title, subTitle, subTitleColor }) => (
  <Text style={[styles.regularTextStyle, style]}>
    {title}
    <Text
      style={[
        styles.regularTextStyle,
        subTitleColor ? { color: subTitleColor } : { color: Colors.DarkBlue },
      ]}
      onPress={onPress}>
      {subTitle}
    </Text>
  </Text>
);

const ParagraphDouble = ({ style, title, subTitle }) => (
  <Text style={[styles.paragraphDoubleStyle, style]}>
    {title}
    <Text style={[styles.regularDoubleStyle]}>{subTitle}</Text>
  </Text>
);

const SemiBoldText = ({ onPress, style, title }) => (
  <Text style={[styles.semiBoldTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);
const BulletText = ({ style, title, titleStyle }) => (
  <View style={[styles.bulletView, style]}>
    <View style={[styles.infobullet]} />
    <Text style={[styles.instructionText, titleStyle]}>{title}</Text>
  </View>
);

export {
  BookText,
  RegularText,
  RegularDouble,
  HeaderText,
  MenuText,
  ParagraphDouble,
  ParagraphText,
  MediumText,
  SemiBoldText,
  BulletText,
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 12,
    marginLeft: wp(15),
    marginTop: Platform.OS === 'android' ? hp(-7) : 0,
    alignSelf: 'center',
  },
  infobullet: {
    width: wp(6),
    height: hp(6),
    borderRadius: hp(3),
    backgroundColor: Colors.Snow100,
    marginTop: Platform.OS === 'android' ? hp(1) : hp(2),
  },
  bulletView: {
    flexDirection: 'row',
    marginTop: hp(10),
  },
  headerTextStyle: {
    fontSize: 22,
  },
  menuTextStyle: {
    fontSize: 20,
    color: Colors.BlackCoral,
  },
  mediumTextStyle: {
    fontSize: 16,
    color: Colors.White,
    textAlign: 'center',
  },
  paragraphTextStyle: {
    fontSize: 12,
  },
  bookTextStyle: {
    fontSize: 14,
  },
  regularTextStyle: {
    fontSize: 12,
    fontStyle: 'normal',
  },
  doubleView: {
    flexDirection: 'row',
    width: wp(324),
  },
  regularDoubleStyle: {
    fontSize: 12,
    lineHeight: 26,
    color: Colors.BlackCoral,
  },
  paragraphDoubleStyle: {
    fontSize: 12,
    color: Colors.BlackCoral,
  },
  semiBoldTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.BlackCoral,
  },
});
