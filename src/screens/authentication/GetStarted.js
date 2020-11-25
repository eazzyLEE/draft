import React from 'react';
import { Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { mainLogo, phoneCard } from '../../../assets/images';
import { DarkBlue, Endeavour, HeaderText, RegularText } from '../../components';
import { Button } from '../../components/Button';
import { MainView } from '../../components/View';
import { getStartedStyle as styles } from './styles';

const GetStarted = () => {
  const colors = [Endeavour, 'rgba(0, 89, 165, 0)'];
  return (
    <>
      <StatusBar backgroundColor={DarkBlue} barStyle="light-content" />
      <LinearGradient
        colors={colors}
        style={styles.gradientBg}
        start={{ x: 0.5, y: 0 }}
        // end={{ x: 0.5, y: 1 }}
        locations={[0, 0.9]}>
        <Image source={mainLogo} style={styles.mainLogo} resizeMode="contain" />
        <Image
          source={phoneCard}
          style={styles.phoneCard}
          resizeMode="contain"
        />
        <MainView style={styles.mainView}>
          <HeaderText title="Hey there" style={styles.leadText} />
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur."
            style={styles.subText}
          />
          <Button title="Log In" buttonStyle={styles.logIn} />
          <Button title="Sign Up" buttonStyle={styles.signUp} light />
        </MainView>
      </LinearGradient>
    </>
  );
};

export default GetStarted;
