import React from 'react';
import { Switch as RSwitch } from 'react-native-switch';
import * as Colors from './Colors';

export const Switch = ({ value, onValueChange }) => {
  return (
    <RSwitch
      value={value}
      onValueChange={onValueChange}
      circleSize={20}
      barHeight={25}
      circleBorderWidth={0}
      backgroundActive={Colors.CaribbeanGreen}
      backgroundInactive={Colors.LinkWater}
      circleActiveColor={Colors.White}
      circleInActiveColor={Colors.White}
      changeValueImmediately={true}
      switchLeftPx={1.5}
      switchRightPx={1.5}
      switchWidthMultiplier={2.9}
      renderActiveText={false}
      renderInActiveText={false}
    />
  );
};
