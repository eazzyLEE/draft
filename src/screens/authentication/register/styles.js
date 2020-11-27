import { StyleSheet } from 'react-native';
import {
  AthensGray,
  BaliHai,
  BlueWood,
  Boticelli,
  BridalHeath,
  DarkBlue,
  Fiord,
  hp,
  Negroni,
  Orange,
  Selago,
  White,
  wp,
} from '../../../components';

export const registerStyles = StyleSheet.create({
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
  headerText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainView: {
    marginTop: hp(20),
  },
  progressContainer: {
    marginLeft: wp(104),
  },
});

export const frameOne = StyleSheet.create({
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  selectContainer: {
    width: wp(327),
    height: hp(88),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Boticelli,
    alignSelf: 'center',
    marginTop: hp(16),
  },
  selectedContainer: {
    backgroundColor: BridalHeath,
    borderColor: Negroni,
    alignSelf: 'center',
    marginTop: hp(16),
  },
  selectRow: {
    marginTop: hp(16),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(303),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  account: {
    color: BaliHai,
    fontSize: 16,
  },
  selectedAccount: {
    color: BlueWood,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selector: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20) / 2,
    borderWidth: 1,
    borderColor: Fiord,
  },
  activeSelector: {
    borderWidth: 5,
    borderColor: Orange,
  },
  subText: {
    width: wp(263),
    fontSize: 12,
    color: BaliHai,
    marginLeft: wp(12),
    marginTop: hp(4),
  },
  selectedText: {
    color: BlueWood,
    fontWeight: '500',
  },
  divider: {
    width: wp(360),
    marginTop: hp(260),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
});

export const frameTwo = StyleSheet.create({
  background: {
    flex: 1,
  },
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  input: {
    marginTop: hp(12),
  },
  termsContainer: {
    width: wp(328),
    height: hp(60),
    backgroundColor: AthensGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(98),
  },
  termsWrapper: {
    width: wp(296),
    color: BaliHai,
    lineHeight: 18,
  },
  termsText: {
    height: hp(16),
    color: Orange,
  },
  divider: {
    width: wp(360),
    marginTop: hp(245),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
  // divider: {
  //   flex: 1,
  //   position: 'absolute',
  //   bottom: hp(68),
  //   width: wp(360),
  //   // marginTop: hp(260),
  //   backgroundColor: Selago,
  //   height: hp(2),
  //   zIndex: 200,
  // },
  // button: {
  //   marginTop: hp(12),
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   bottom: hp(12),
  //   zIndex: 3000,
  // },
});

export const frameThree = StyleSheet.create({
  background: {
    flex: 1,
  },
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  mobileNumberView: {
    borderWidth: 1,
    width: wp(328),
    alignSelf: 'center',
    paddingLeft: wp(12),
    height: hp(52),
    borderRadius: 3,
    borderColor: Boticelli,
    backgroundColor: AthensGray,
    marginTop: hp(32),
  },
  mobileTitle: {
    fontSize: 11,
    color: BaliHai,
    marginTop: hp(8),
  },
  mobileValue: {
    fontSize: 16,
    color: BlueWood,
    marginTop: 0,
  },
  subText: {
    marginTop: hp(24),
    color: BlueWood,
    marginLeft: wp(16),
  },
  otpContainer: {
    marginTop: hp(16),
    height: hp(62),
    width: wp(328),
    alignSelf: 'center',
    color: BlueWood,
  },
  otpInput: {
    width: wp(70),
    height: hp(52),
    borderColor: Boticelli,
    color: BlueWood,
    borderRadius: 3,
    fontSize: 16,
  },
  activeOtpInput: {
    width: wp(70),
    height: hp(52),
    fontSize: 29,
    borderColor: Boticelli,
    color: BlueWood,
    borderRadius: 3,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: wp(328),
    marginTop: hp(20),
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smsText: {
    fontSize: 14,
    color: Orange,
    marginLeft: wp(12),
  },
  timerText: {
    fontSize: 16,
    color: BaliHai,
  },
  divider: {
    width: wp(360),
    marginTop: hp(215),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
});
