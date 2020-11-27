import { StyleSheet } from 'react-native';
import { DarkBlue, hp, White, wp } from '../../../components';

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
});
