import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const RightChevrolet = (props) => (
  <Svg
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.272 16.725a.966.966 0 00.67.275c.25-.002.49-.1.669-.275l7.113-7.076a.943.943 0 000-1.332l-7.11-7.079a.951.951 0 00-1.579.678.94.94 0 00.24.654l6.439 6.413-6.442 6.41a.952.952 0 000 1.332z"
      fill="#fff"
      stroke="#fff"
    />
  </Svg>
);

export const ButtonChevrolet = (props) => (
  <Svg
    width={8}
    height={15}
    viewBox="0 0 8 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.242 14.742A.837.837 0 00.837 15a.837.837 0 00.595-.258l6.323-6.634A.91.91 0 008 7.484a.91.91 0 00-.245-.625L1.434.223A.82.82 0 00.849 0a.824.824 0 00-.571.26.906.906 0 00-.247.599.911.911 0 00.213.613l5.724 6.012-5.726 6.009a.919.919 0 00-.242.624c0 .234.087.458.242.625z"
      fill={props.fill || '#fff'}
    />
  </Svg>
);

export const Lock = (props) => (
  <Svg
    width={14}
    height={17}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.87 16H3.13C1.96 16 1 15.115 1 14.033V7.148c0-1.082.959-1.968 2.13-1.968h7.74c1.171 0 2.13.886 2.13 1.968v6.885C13 15.115 12.041 16 10.87 16zM11 5.18c-.133-2.311-1.867-4.13-4-4.13S3.178 2.868 3 5.18"
      stroke="#8397B1"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 12.557c-.55 0-1-.442-1-.983V9.607c0-.541.45-.984 1-.984s1 .443 1 .984v1.967c0 .54-.45.983-1 .983z"
      fill="#8397B1"
    />
  </Svg>
);

export const LeftChevrolet = (props) => (
  <Svg
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.728 16.725a.966.966 0 01-.67.275.966.966 0 01-.669-.275L1.276 9.649a.943.943 0 010-1.332l7.11-7.079a.951.951 0 011.579.678.94.94 0 01-.24.654L3.287 8.983l6.442 6.41a.952.952 0 010 1.332z"
      fill="#fff"
      stroke="#fff"
    />
  </Svg>
);
