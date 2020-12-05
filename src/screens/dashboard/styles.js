import { StyleSheet } from 'react-native';
import { DarkBlue, DarkBlue100, hp, Orange, White, wp } from '../../components';

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
  },
  dashboardButton: {
    width: wp(56),
    height: wp(56),
    borderRadius: wp(56) / 2,
    backgroundColor: Orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
