import { StyleSheet } from 'react-native';
import {
  BaliHai,
  Boticelli,
  DarkBlue,
  hp,
  Orange,
  Selago,
  White,
  wp,
} from '../../components';

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
  forgotButton: {
    height: hp(22),
    justifyContent: 'center',
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

export const forgotPasswordStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
  },
  backIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(16),
    marginTop: hp(10),
  },
  forgotText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainView: {
    marginTop: hp(20),
  },
  header: {
    marginTop: hp(32),
    width: wp(328),
    letterSpacing: 0.01,
    lineHeight: 26,
  },
  input: {
    marginTop: hp(32),
  },
  button: {
    marginTop: hp(24),
  },
  divider: {
    width: wp(328),
    height: hp(1),
    marginTop: hp(32),
    backgroundColor: Selago,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    alignSelf: 'flex-start',
    marginLeft: wp(16),
  },
  signIn: {
    marginLeft: wp(8),
    color: Orange,
    fontSize: 16,
  },
});

export const resetStatusStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  thumbImage: {
    width: wp(493),
    height: wp(493),
    left: -wp(66),
  },
  mainView: {
    position: 'absolute',
    zIndex: 400,
    marginTop: hp(463),
  },
  headerText: {
    marginTop: hp(39),
    marginLeft: wp(16),
    alignSelf: 'flex-start',
  },
  subText: {
    marginTop: hp(12),
    marginLeft: wp(16),
    alignSelf: 'flex-start',
    color: BaliHai,
    fontSize: 16,
    width: wp(320),
  },
  button: {
    marginTop: hp(40),
  },
});
