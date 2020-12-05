import { StyleSheet } from 'react-native';
import {
  AthensGray,
  BlueWood,
  DarkBlue,
  hp,
  Orange,
  Selago,
  White,
  wp,
} from '../../../../components';

export const accountStyles = StyleSheet.create({
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
  },
  accountCard: {
    width: wp(328),
    height: hp(128),
    borderRadius: 10,
    backgroundColor: AthensGray,
    marginTop: hp(32),
  },
  accountRow: {
    width: wp(296),
    justifyContent: 'space-between',
    marginTop: hp(6),
  },
  divider: {
    marginTop: hp(16),
  },
  accountTitle: {
    fontSize: 14,
    letterSpacing: 0.01,
    color: BlueWood,
  },
  accountValue: {
    fontSize: 14,
    letterSpacing: 0.01,
    color: BlueWood,
    fontWeight: 'bold',
  },
  copy: {
    color: Orange,
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: hp(16),
  },
  button: {
    // position: 'absolute',
    // bottom: 0,
    // height: hp(68),
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
});
