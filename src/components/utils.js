import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

const CustomHeight = 750; // 740;
const CustomWidth = 360;

export const hp = (value) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};
