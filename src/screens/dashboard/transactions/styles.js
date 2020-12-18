import { StyleSheet } from 'react-native';
import {
  BaliHai,
  BlueWood,
  CongressBlue,
  DarkBlue,
  Grey100,
  hp,
  // MorningGlory,
  // Orange,
  White,
  wp,
} from '../../../components';

export const transactionStyles = StyleSheet.create({
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
  searchNav: {
    height: hp(32),
    width: wp(32),
    borderRadius: 8,
    backgroundColor: CongressBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(62),
  },
  mainView: {
    marginTop: hp(20),
  },
  screenTitle: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  recent: {
    alignSelf: 'flex-start',
    marginTop: hp(32),
    marginLeft: wp(16),
    fontSize: 14,
  },
  notifImage: {
    width: wp(40),
    height: hp(40),
  },
  itemRow: {
    width: wp(328),
    marginTop: hp(20),
  },
  accountTypeColumn: {
    marginLeft: wp(19),
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    width: wp(232),
    color: BlueWood,
  },
  time: {
    position: 'absolute',
    right: 0,
    fontSize: 14,
    color: BlueWood,
    // marginLeft: wp()
  },
  accountDivider: {
    width: wp(292),
    height: 2,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
});

export const transactionDetailStyles = StyleSheet.create({
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
  screenTitle: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainView: {
    marginTop: hp(20),
  },
  accountDivider: {
    width: wp(344),
    height: 2,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
  title: {
    color: BaliHai,
    fontSize: 14,
  },
  value: {
    color: BlueWood,
    fontSize: 14,
    marginTop: hp(5),
  },
  menuView: {
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    marginTop: hp(16),
  },
  notifImage: {
    width: wp(40),
    height: hp(40),
  },
  menuRow: {
    width: wp(328),
  },
  menuGrid: {
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    marginTop: hp(16),
    width: wp(328),
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(55),
    width: wp(328),
  },
  button: {
    width: wp(140),
  },
});
