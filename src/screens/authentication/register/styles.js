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

export const frameFour = StyleSheet.create({
  background: {
    flex: 1,
  },
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  itemCheckView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(10),
  },
  nullCheck: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15) / 2,
    backgroundColor: Boticelli,
  },
  checkWrapper: {
    marginLeft: wp(15),
    marginTop: hp(22),
  },
  checkText: {
    marginLeft: wp(10),
    color: BaliHai,
    fontSize: 14,
  },
  checkedText: {
    marginLeft: wp(10),
    color: BlueWood,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  divider: {
    width: wp(360),
    marginTop: hp(275),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
});

export const frameFive = StyleSheet.create({
  background: {
    flex: 1,
  },
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  bvnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(16),
    marginTop: hp(24),
  },
  bvnText: {
    fontSize: 14,
    color: Orange,
    marginLeft: wp(9),
  },
  dobInput: {
    marginTop: hp(20),
  },
  bvnInfo: {
    width: wp(328),
    height: hp(112),
    borderRadius: 10,
    backgroundColor: AthensGray,
    marginTop: hp(32),
    alignSelf: 'center',
  },
  bvnHeader: {
    marginTop: hp(16),
    fontSize: 14,
    color: BaliHai,
    marginLeft: wp(16),
  },
  subText: {
    marginTop: hp(5),
    fontSize: 13,
    color: BaliHai,
    marginLeft: wp(16),
    lineHeight: 15,
    width: wp(296),
  },
  frameSixDivider: {
    marginTop: hp(340),
  },
  divider: {
    width: wp(360),
    marginTop: hp(255),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
});

export const frameEight = StyleSheet.create({
  background: {
    flex: 1,
  },
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
    width: wp(328),
  },
  cameraView: {
    width: wp(324),
    height: hp(444),
    alignSelf: 'center',
    borderRadius: 8,
  },
  divider: {
    width: wp(360),
    marginTop: hp(255),
    backgroundColor: Selago,
    height: hp(2),
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(324),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
    width: wp(156),
  },
});
