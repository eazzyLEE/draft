import React from 'react';
import { View, Image } from 'react-native';
import { thumbImg } from '../../../assets/images';
import { HeaderText, ParagraphText } from '../../components';
import { Button } from '../../components/Button';
import { MainView } from '../../components/View';
import { resetStatusStyles as styles } from './styles';

const ResetStatus = () => {
  return (
    <View style={styles.background}>
      <Image source={thumbImg} style={styles.thumbImage} resizeMode="contain" />
      <MainView style={styles.mainView}>
        <HeaderText title="Reset details sent" style={styles.headerText} />
        <ParagraphText
          title="Please check your email inbox for a password reset link"
          style={styles.subText}
        />
        <Button title="Proceed to Login" style={styles.button} />
      </MainView>
    </View>
  );
};

export default ResetStatus;
