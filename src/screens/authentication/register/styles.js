import { StyleSheet } from 'react-native';
import {
  BaliHai,
  BlueWood,
  Boticelli,
  BridalHeath,
  DarkBlue,
  Fiord,
  hp,
  Negroni,
  Orange,
  Selago,
  White,
  wp,
} from '../../../components';

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
  progressContainer: {
    marginLeft: wp(104),
  },
});

export const frameOne = StyleSheet.create({
  leadText: {
    marginTop: hp(32),
    marginLeft: wp(16),
    marginBottom: hp(16),
  },
  selectContainer: {
    width: wp(327),
    height: hp(88),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Boticelli,
    alignSelf: 'center',
    marginTop: hp(16),
  },
  selectedContainer: {
    backgroundColor: BridalHeath,
    borderColor: Negroni,
    alignSelf: 'center',
    marginTop: hp(16),
  },
  selectRow: {
    marginTop: hp(16),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(303),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  account: {
    color: BaliHai,
    fontSize: 16,
  },
  selectedAccount: {
    color: BlueWood,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selector: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20) / 2,
    borderWidth: 1,
    borderColor: Fiord,
  },
  activeSelector: {
    borderWidth: 5,
    borderColor: Orange,
  },
  subText: {
    width: wp(263),
    fontSize: 12,
    color: BaliHai,
    marginLeft: wp(12),
    marginTop: hp(4),
  },
  selectedText: {
    color: BlueWood,
    fontWeight: '500',
  },
  divider: {
    width: wp(360),
    marginTop: hp(260),
    backgroundColor: Selago,
    height: hp(2),
  },
  button: {
    marginTop: hp(12),
    alignSelf: 'center',
  },
});
