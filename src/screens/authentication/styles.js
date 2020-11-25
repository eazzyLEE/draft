import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components';

export const getStartedStyle = StyleSheet.create({
  background: {
    // flex: 1,
    backgroundColor: 'rgba(0, 89, 165, 0)',
  },
  mainLogo: {
    width: wp(210),
    height: hp(40),
    marginTop: hp(40),
    marginLeft: wp(17),
  },
  phoneCard: {
    width: wp(561),
    height: hp(336),
    marginTop: hp(43),
    // marginBottom: -hp(35),
    left: -wp(101),
    // position: 'absolute',
    // zIndex: -1000,
  },
  mainView: {
    // flex: 0.7,
    height: hp(278),
    marginTop: hp(439),
    zIndex: 1000,
    position: 'absolute',
  },
  gradientBg: {
    // flex: 1,
    height: '100%',
  },
  leadText: {
    marginTop: hp(39),
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  subText: {
    marginTop: hp(12),
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  logIn: {
    alignSelf: 'center',
    marginTop: hp(30),
    marginLeft: -wp(5),
  },
  signUp: {
    alignSelf: 'center',
    marginTop: hp(20),
    marginLeft: -wp(5),
  },
});
