import { StyleSheet } from 'react-native';
import {
  AthensGray,
  BaliHai,
  BlueWood,
  Boticelli,
  DarkBlue,
  Grey100,
  hp,
  Orange,
  White,
  White200,
  wp,
} from '../../../components';
// import { sceneThree } from '../bills/styles';

export const airtimeStyles = StyleSheet.create({
  background: {
    height: hp(256),
    width: wp(328),
    backgroundColor: White,
    position: 'absolute',
    // bottom: hp(120),
    borderRadius: 20,
    alignItems: 'center',
  },
  bottomTrigger: {
    height: 4,
    width: wp(40),
    borderRadius: 50,
    backgroundColor: White200,
    marginTop: hp(16),
    alignSelf: 'center',
  },
  sendText: {
    color: DarkBlue,
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    marginTop: hp(22),
  },
  mainDivider: {
    width: wp(328),
    height: 2,
    backgroundColor: Grey100,
    opacity: 0.5,
    marginTop: hp(20),
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(20),
    width: wp(284),
  },
  accountName: {
    fontSize: 16,
  },
  accountNumber: {
    fontSize: 14,
    color: BaliHai,
  },
  amount: {
    fontSize: 16,
    color: BlueWood,
  },
  subDivider: {
    width: wp(328),
    height: 2,
    backgroundColor: Grey100,
    marginTop: hp(20),
    opacity: 0.5,
  },
});

export const sceneOne = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(32),
    width: wp(284),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  leadText: {
    fontSize: 16,
    color: BaliHai,
  },
  amount: {
    fontSize: 16,
    color: BlueWood,
  },
  mainBlock: {
    height: hp(307),
    width: wp(328),
    marginTop: hp(20),
    backgroundColor: AthensGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  recipientGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(284),
    alignSelf: 'center',
    marginTop: hp(20),
  },
  recipient: {
    fontSize: 16,
    color: DarkBlue,
  },
  beneficiary: {
    fontSize: 16,
    color: Orange,
  },
  input: {
    width: wp(296),
    height: hp(52),
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Boticelli,
    backgroundColor: White,
    alignSelf: 'center',
    marginTop: hp(20),
    paddingLeft: wp(10),
    marginBottom: hp(12),
  },
  bankView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankText: {
    fontSize: 14,
  },
  beneficiaryRow: {
    alignSelf: 'flex-start',
    marginLeft: wp(16),
  },
  beneficiaryTitle: {
    fontSize: 14,
    color: BaliHai,
  },
  beneficiaryName: {
    fontSize: 14,
    color: BlueWood,
    marginLeft: wp(8),
  },
  beneficiarySave: {
    color: BaliHai,
    fontSize: 14,
    marginLeft: wp(12),
  },
  button: {
    width: wp(292),
    marginTop: hp(80),
    alignSelf: 'center',
  },
  topBankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(22),
    width: wp(284),
    // justifyContent: 'space-between',
    alignSelf: 'center',
  },
  searchInput: {
    marginLeft: wp(10),
  },
  close: {
    position: 'absolute',
    right: wp(5),
  },
});

export const sceneTwo = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(32),
    width: wp(284),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  leadText: {
    fontSize: 16,
    color: BaliHai,
  },
  amount: {
    fontSize: 16,
    color: BlueWood,
  },
  topBlock: {
    height: hp(85),
    width: wp(328),
    marginTop: hp(20),
    paddingLeft: wp(16),
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  midBlock: {
    height: hp(150),
    width: wp(328),
    backgroundColor: AthensGray,
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  beneficiaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(296),
    marginTop: hp(20),
  },
  cableRow: {
    width: wp(269),
  },
  beneficiaryTitle: {
    fontSize: 16,
    color: BaliHai,
  },
  beneficiaryName: {
    fontSize: 16,
    color: BaliHai,
  },
  bankDetail: {
    fontSize: 14,
    marginTop: hp(6),
    alignSelf: 'flex-end',
    right: wp(40),
  },
  dropdown: {
    position: 'absolute',
    right: wp(7),
  },
  // bankDetail: {
  //   fontSize: 14,
  //   color: BaliHai,
  //   marginTop: hp(5),
  // },
  bottomBlock: {
    height: hp(72),
    width: wp(328),
    // marginTop: hp(72),
    backgroundColor: AthensGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: Grey100,
    justifyContent: 'space-evenly',
  },
  amountTitle: {
    color: DarkBlue,
    marginTop: hp(20),
    fontSize: 16,
    fontWeight: '500',
    marginLeft: wp(16),
  },
  amountRow: {
    justifyContent: 'space-between',
    width: wp(294),
  },
  amountInput: {
    fontSize: 40,
  },
  amountButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Boticelli,
    height: hp(40),
    width: wp(59),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: White,
  },
  fee: {
    marginLeft: wp(16),
    fontSize: 14,
  },
  amountOption: {
    color: BlueWood,
    fontWeight: 'bold',
  },
  button: {
    width: wp(292),
  },
});

export const sceneThree = StyleSheet.create({
  ...sceneTwo,
  topBlock: {
    height: hp(85),
    width: wp(328),
    marginTop: hp(20),
    paddingLeft: wp(16),
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  beneficiaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(296),
    marginTop: hp(20),
  },
  cableRow: {
    width: wp(269),
  },
  beneficiaryTitle: {
    fontSize: 16,
    color: BaliHai,
  },
  beneficiaryName: {
    fontSize: 16,
    color: BlueWood,
  },
  midBlock: {
    height: hp(59),
    width: wp(328),
    borderTopWidth: 1,
    borderColor: Grey100,
    backgroundColor: White,
  },
  amountRow: {
    marginTop: hp(20),
    justifyContent: 'space-between',
    width: wp(290),
  },
  amountSubRow: {
    justifyContent: 'space-between',
    width: wp(269),
  },
  amountText: {
    fontSize: 16,
    color: BaliHai,
  },
  amountValue: {
    color: BlueWood,
    fontSize: 16,
  },
  bottomBlock: {
    height: hp(163),
    width: wp(328),
    // marginTop: hp(72),
    backgroundColor: AthensGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  authorizationRow: {
    width: wp(296),
    justifyContent: 'space-between',
    marginTop: hp(20),
  },
  authorizationText: {
    color: DarkBlue,
    fontSize: 16,
  },
  fingerprintText: {
    fontSize: 16,
    color: Orange,
  },
  otpContainer: {
    marginTop: hp(5),
    height: hp(62),
    width: wp(296),
    alignSelf: 'center',
    color: BlueWood,
  },
  otpInput: {
    width: wp(62),
    height: hp(52),
    borderColor: Boticelli,
    color: BlueWood,
    borderRadius: 3,
    fontSize: 16,
  },
  activeOtpInput: {
    width: wp(62),
    height: hp(52),
    fontSize: 29,
    borderColor: Boticelli,
    color: BlueWood,
    borderRadius: 3,
  },
  touchIdBackground: {
    width: wp(60),
    height: hp(60),
    borderRadius: 8,
    backgroundColor: Boticelli,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(24),
  },
  touchId: {
    width: wp(33.3),
    height: hp(40),
  },
});
