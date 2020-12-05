import { StyleSheet } from 'react-native';
import {
  BaliHai,
  DarkBlue,
  HawkesBlue,
  hp,
  LinkWater,
  Selago,
  White,
  wp,
} from '../../../components';

export const settingStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
    alignItems: 'center',
  },
  backIconRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    marginTop: hp(10),
  },
  profileLarge: {
    width: wp(70),
    height: hp(70),
    marginLeft: wp(92),
  },
  fullname: {
    color: White,
    marginTop: hp(20),
    fontSize: 18,
  },
  mainView: {
    marginTop: 0,
  },
  touchableView: {
    height: hp(82),
    width: '100%',
  },
  menuTitle: {
    marginTop: hp(28),
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    color: DarkBlue,
    fontSize: 22,
  },
  disabledTitle: {
    color: BaliHai,
  },
  mainInactiveView: {
    backgroundColor: HawkesBlue,
  },
  midInactiveView: {
    marginTop: 0,
    height: hp(166),
    bottom: 0,
    backgroundColor: HawkesBlue,
    position: 'absolute',
  },
  midView: {
    marginTop: 0,
    bottom: 0,
    backgroundColor: White,
    position: 'absolute',
    height: hp(466),
  },
  baseView: {
    marginTop: 0,
    bottom: 0,
    height: hp(390),
    backgroundColor: White,
    position: 'absolute',
  },
  baseInactiveView: {
    marginTop: 0,
    height: hp(82),
    backgroundColor: LinkWater,
    bottom: 0,
    position: 'absolute',
  },
  notificationHeader: {
    color: DarkBlue,
    marginTop: hp(5),
    fontSize: 16,
  },
  notificationDivider: {
    width: wp(360),
    height: 1,
    marginTop: hp(24),
    backgroundColor: Selago,
  },
  subText: {
    width: wp(184),
    marginTop: hp(32),
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1,
  },
  inAppView: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(35),
    width: wp(296),
  },
  button: {
    width: wp(140),
  },
});
