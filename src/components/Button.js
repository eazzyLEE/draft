import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as Btn } from 'react-native-elements';
import { ButtonChevrolet } from '../../assets/svgs';
import { Orange, White } from './Colors';
import { hp, wp } from './utils';

const Button = ({
  light,
  style,
  buttonStyle,
  disabled,
  disabledStyle,
  loading,
  onPress,
  title,
  titleStyle,
  icon,
  iconRight,
}) => {
  return (
    <Btn
      style={style}
      icon={icon || <ButtonChevrolet fill={light && Orange} />}
      title={title}
      buttonStyle={[
        styles.button,
        light && styles.lightButton,
        style,
        buttonStyle,
      ]}
      loading={loading}
      titleStyle={[light ? styles.lightTitle : styles.title, titleStyle]}
      disabled={disabled}
      disabledStyle={disabledStyle || styles.disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      onPress={onPress}
      iconRight={iconRight || true}
    />
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    width: wp(328),
    height: hp(44),
    backgroundColor: Orange,
    justifyContent: 'space-between',
    paddingRight: wp(15),
    paddingLeft: wp(15),
    borderRadius: 8,
  },
  lightButton: {
    backgroundColor: White,
    borderWidth: 1,
    borderColor: Orange,
  },
  lightTitle: {
    color: Orange,
  },
});
