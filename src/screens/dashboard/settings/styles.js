import { StyleSheet } from 'react-native';
import {
  BaliHai,
  DarkBlue,
  Grey100,
  HawkesBlue,
  hp,
  LinkWater,
  Orange,
  Selago,
  Serenade,
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

export const nextOfKinStyles = StyleSheet.create({
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
  leadText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainAccountView: {
    marginTop: hp(20),
    flex: 1,
  },
  input: {
    marginTop: hp(16),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: hp(68),
    borderTopColor: Selago,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  profileLarge: {
    width: wp(72),
    height: hp(72),
  },
});

export const profileStyles = StyleSheet.create({
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
  leadText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainAccountView: {
    marginTop: hp(20),
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: hp(16),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: hp(68),
    borderTopColor: Selago,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  profileLarge: {
    width: wp(72),
    height: hp(72),
    marginTop: hp(32),
  },
  editText: {
    marginTop: hp(16),
    fontSize: 14,
    color: Orange,
  },
});

export const kycStyles = StyleSheet.create({
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
  leadText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainAccountView: {
    marginTop: hp(20),
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: hp(16),
  },
  settingsRow: {
    width: wp(328),
    marginTop: hp(24),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightItem: {
    position: 'absolute',
    right: 0,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: wp(20),
  },
  settingsDivider: {
    width: wp(344),
    height: 1,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
  iconView: {
    width: wp(40),
    height: hp(40),
    borderRadius: 8,
    backgroundColor: Serenade,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: wp(24),
    width: wp(85),
    height: hp(32),
    marginTop: -hp(15),
    borderRadius: 20,
  },
});

export const upload = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
  },
  backIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: wp(16),
    marginTop: hp(10),
  },
  leadText: {
    fontSize: 18,
    color: White,
    marginLeft: wp(16),
  },
  mainAccountView: {
    marginTop: hp(20),
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
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
