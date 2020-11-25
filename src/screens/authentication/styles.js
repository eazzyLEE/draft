import { StyleSheet } from 'react-native';
import { BaliHai, Boticelli, DarkBlue, hp, wp } from '../../components';

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
  },
  signUp: {
    alignSelf: 'center',
    marginTop: hp(20),
  },
});

export const signinStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
  },
  scrollBackground: {
    flex: 1,
  },
  fullHeight: {
    position: 'absolute',
    flex: 1,
    marginTop: hp(0),
    height: hp(700),
  },
  mainLogo: {
    width: wp(210),
    height: hp(40),
    marginTop: hp(10),
    marginLeft: wp(17),
  },
  mainView: {
    marginTop: hp(218),
  },
  leadText: {
    marginTop: hp(32),
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  subText: {
    marginTop: hp(12),
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  emailInput: {
    marginTop: hp(36),
  },
  passwordInput: {
    marginTop: hp(20),
  },
  midGrid: {
    width: wp(328),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: wp(15),
    marginTop: hp(24),
  },
  loginView: {
    right: 0,
  },
  logIn: {
    width: wp(156),
    position: 'relative',
    right: 0,
    marginLeft: wp(59),
  },
  forgotText: {
    color: BaliHai,
    marginLeft: wp(12),
    fontWeight: 'bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(328),
    marginTop: hp(26),
  },
  firstDivider: {
    width: wp(142),
    height: 1,
    backgroundColor: Boticelli,
  },
  dividerText: {
    color: BaliHai,
    lineHeight: 16,
  },
  createAccountButton: {
    marginTop: hp(15),
  },
});
