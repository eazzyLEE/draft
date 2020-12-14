import { StyleSheet } from 'react-native';
import {
  BaliHai,
  BlueWood,
  Boticelli,
  DarkBlue,
  hp,
  Orange,
  Selago,
  White,
  wp,
} from '../../../../components';

export const securityStyles = StyleSheet.create({
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
  leadText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainView: {
    marginTop: hp(20),
    paddingTop: hp(15),
  },
});

export const updatePinStyles = StyleSheet.create({
  ...securityStyles,
  subText: {
    marginTop: hp(24),
    color: BlueWood,
    marginLeft: wp(16),
    alignSelf: 'flex-start',
  },
  instruction: {
    alignSelf: 'flex-start',
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
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: hp(68),
    borderTopColor: Selago,
    backgroundColor: White,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    width: '100%',
  },
});

export const updatePasswordStyles = StyleSheet.create({
  ...securityStyles,
  topInput: {
    marginTop: hp(25),
  },
  input: {
    marginTop: hp(16),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: hp(68),
    borderTopColor: Selago,
    backgroundColor: White,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    width: '100%',
  },
});
