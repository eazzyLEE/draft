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
  Serenade,
  White,
  White200,
  wp,
} from '../../../components';

export const billStyles = StyleSheet.create({
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
    height: hp(453),
    width: wp(328),
    marginTop: hp(20),
    backgroundColor: AthensGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  mainRow: {
    justifyContent: 'space-between',
    width: wp(296),
    marginTop: hp(20),
    marginBottom: hp(10),
  },
  category: {
    fontSize: 16,
    color: DarkBlue,
  },
  search: {
    fontSize: 16,
    color: Orange,
  },
  categoryView: {
    marginTop: hp(12),
  },
  categoryRow: {
    alignSelf: 'flex-start',
    marginLeft: wp(16),
  },
  categoryIcon: {
    width: wp(40),
    height: hp(40),
    borderRadius: 8,
    backgroundColor: Serenade,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    marginLeft: wp(20),
    color: BlueWood,
  },
  billDivider: {
    width: wp(310),
    alignSelf: 'flex-end',
    marginTop: hp(12),
    backgroundColor: Grey100,
    height: 1,
  },
});

export const sceneTwo = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(32),
    width: wp(296),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  leadText: {
    fontSize: 16,
    marginLeft: wp(16),
    color: DarkBlue,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: BlueWood,
  },
  mainBlock: {
    height: hp(453),
    width: wp(328),
    marginTop: hp(20),
    paddingTop: hp(10),
    backgroundColor: AthensGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: Grey100,
  },
  categoryView: {
    marginTop: hp(15),
  },
  categoryRow: {
    alignSelf: 'flex-start',
    marginLeft: wp(16),
  },
  categoryIcon: {
    width: wp(40),
    height: hp(40),
    borderRadius: 8,
    backgroundColor: Serenade,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    marginLeft: wp(20),
    color: BlueWood,
  },
  billDivider: {
    width: wp(310),
    alignSelf: 'flex-end',
    marginTop: hp(20),
    backgroundColor: Grey100,
    height: 1,
  },
});

export const sceneThree = StyleSheet.create({
  ...sceneTwo,
  categoryRow: {
    width: wp(296),
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 16,
    color: BlueWood,
  },
  categoryAmount: {
    fontSize: 16,
    color: BlueWood,
  },
});

export const sceneFour = StyleSheet.create({
  ...sceneTwo,
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(32),
    width: wp(296),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  leadText: {
    fontSize: 16,
    color: BaliHai,
    fontWeight: 'bold',
  },
  midBlock: {
    height: hp(59),
    width: wp(328),
    borderTopWidth: 1,
    borderColor: Grey100,
    backgroundColor: White,
  },
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
    color: BaliHai,
  },
  bankDetail: {
    fontSize: 14,
    marginTop: hp(3),
  },
  infoGrid: {
    marginTop: hp(20),
    justifyContent: 'space-between',
    width: wp(296),
  },
  infoText: {
    color: DarkBlue,
    fontSize: 16,
  },
  smartCard: {
    color: Orange,
    fontSize: 16,
  },
  smartCardInput: {
    width: wp(296),
    height: hp(52),
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Boticelli,
    backgroundColor: White,
    alignSelf: 'center',
    marginTop: hp(15),
    paddingLeft: wp(10),
    marginBottom: hp(12),
    justifyContent: 'center',
    paddingRight: wp(10),
  },
  bankView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: wp(292),
    marginTop: hp(20),
    alignSelf: 'center',
  },
});

export const sceneFive = StyleSheet.create({
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
