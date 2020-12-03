import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { wp } from '../src/components';

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

export const Messaging = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.41 13.118h.867V16l4.164-2.882h6.15c1.33 0 2.409-1.028 2.409-2.294v-8.53C16 1.028 14.92 0 13.59 0H2.41C1.08 0 0 1.028 0 2.294v8.53c0 1.266 1.08 2.294 2.41 2.294zM1.137 2.294c0-.66.579-1.211 1.273-1.211h11.18c.694 0 1.273.55 1.273 1.211v8.53c0 .66-.579 1.211-1.273 1.211H7.075l-2.641 1.836v-1.836H2.41c-.694 0-1.273-.55-1.273-1.211v-8.53zm10.757 2.7H4.106V3.913h7.788v1.083zm0 2.038H4.106V5.95h7.788v1.083zm0 2.02H4.106V7.967h7.788v1.083z"
      fill="#D98518"
    />
  </Svg>
);

export const GreenCheck = (props) => (
  <Svg
    width={wp(15)}
    height={wp(15)}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={7.5} cy={7.5} r={7.5} fill="#00CC8D" />
    <Path
      d="M5.265 7.58a.75.75 0 00-1.03 1.09l2.25 2.125a.75.75 0 001.107-.085l3.5-4.5a.75.75 0 10-1.184-.92L6.915 9.138 5.265 7.58z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.5}
    />
  </Svg>
);

export const Plus = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.342 2.342a8.005 8.005 0 000 11.316 8.005 8.005 0 0011.316 0 8.005 8.005 0 000-11.316C10.535-.78 5.446-.78 2.342 2.342zm10.371 10.371c-2.602 2.603-6.843 2.603-9.446 0-2.602-2.602-2.602-6.843 0-9.446 2.603-2.602 6.844-2.602 9.446 0 2.603 2.603 2.603 6.844 0 9.446z"
      fill="#E99B4F"
    />
    <Path
      d="M7.99 4.193a.65.65 0 00-.655.655v2.506H4.829a.65.65 0 00-.656.656c0 .366.29.655.656.655h2.506v2.506c0 .366.289.655.655.655a.673.673 0 00.463-.192.673.673 0 00.193-.463V8.665h2.506a.673.673 0 00.462-.193.673.673 0 00.193-.462.65.65 0 00-.655-.656H8.646V4.848a.65.65 0 00-.656-.655z"
      fill="#E99B4F"
    />
  </Svg>
);
