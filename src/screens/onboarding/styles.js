import { StyleSheet } from 'react-native';
import { DarkBlue, hp, Orange, Smoke400, White, wp } from '../../components';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: DarkBlue,
  },
  onboardingImage: {
    height: hp(360),
    width: '100%',
  },
  titleBlock: {
    marginTop: hp(76),
  },
  title: {
    fontSize: 28,
    color: White,
    marginLeft: wp(20),
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: Smoke400,
    marginTop: hp(24),
    marginLeft: wp(20),
  },
  dotStyle: {
    backgroundColor: DarkBlue,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: hp(62),
    width: wp(318),
  },
  createAccountButton: {
    // marginLeft: wp(20),
  },
  createAccountText: {
    color: Orange,
    fontSize: 16,
  },
  nextButton: {
    width: wp(52),
    height: wp(52),
    borderRadius: wp(52) / 2,
    backgroundColor: Orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    margin: hp(10),
  },
  buttonContainer: {
    marginTop: -hp(40),
  },
});
