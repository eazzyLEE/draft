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
