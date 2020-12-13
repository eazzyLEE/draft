import { StyleSheet } from 'react-native';
import {
  BlueWood,
  DarkBlue,
  DarkBlue100,
  Grey100,
  hp,
  Orange,
  Smoke400,
  White,
  wp,
} from '../../components';

export const dashboardStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
    alignItems: 'center',
  },
  leadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(328),
    alignSelf: 'center',
    marginTop: hp(10),
  },
  profileImage: {
    width: wp(32),
    height: hp(32),
  },
  mainLogo: {
    width: wp(105),
    height: hp(20),
  },
  notificationButton: {
    width: wp(32),
    height: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  kycBanner: {
    width: wp(328),
    height: hp(92),
    borderRadius: 8,
    backgroundColor: DarkBlue100,
    marginTop: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(295),
  },
  bannerLeadText: {
    color: White,
    lineHeight: 18,
    width: wp(206),
    fontSize: 14,
  },
  bannerSubText: {
    color: Orange,
    fontSize: 14,
    marginTop: hp(4),
  },
  kycInfo: {
    width: wp(52),
    height: hp(52),
  },
  cardGrid: {
    marginTop: hp(24),
    width: wp(405),
  },
  customItem: {
    width: wp(300),
    marginRight: wp(16),
  },
  dots: {
    width: wp(12),
  },
  container: {
    width: wp(36),
  },
  dashboardButtonRow: {
    width: wp(224),
    position: 'absolute',
    bottom: 28,
  },
  dashboardButton: {
    width: wp(56),
    height: wp(56),
    borderRadius: wp(56) / 2,
    backgroundColor: Orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    width: wp(128),
    height: hp(56),
    backgroundColor: White,
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitle: {
    color: Orange,
    fontSize: 14,
    marginLeft: wp(12),
  },
});

export const notificationStyles = StyleSheet.create({
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
  },
  notifImage: {
    width: wp(40),
    height: hp(40),
  },
  itemRow: {
    width: wp(328),
    marginTop: hp(16),
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
    color: Smoke400,
    // marginLeft: wp()
  },
  accountDivider: {
    width: wp(237),
    height: 2,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
});
