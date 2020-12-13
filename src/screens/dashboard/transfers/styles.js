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

export const transferStyles = StyleSheet.create({
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
  button: {
    width: wp(292),
    marginTop: hp(32),
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
    marginTop: hp(20),
  },
  beneficiaryTitle: {
    fontSize: 16,
    color: BaliHai,
  },
  beneficiaryName: {
    fontSize: 16,
    color: BlueWood,
    marginLeft: wp(4),
  },
  dropdown: {
    position: 'absolute',
    right: wp(20),
  },
  bankDetail: {
    fontSize: 14,
    color: BaliHai,
    marginTop: hp(5),
  },
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
