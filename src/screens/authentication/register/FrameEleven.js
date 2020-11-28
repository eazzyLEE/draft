import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { HeaderText, hp, RegularText } from '../../../components';
import { Button } from '../../../components/Button';
import { frameThree as styles } from './styles';

export default function FrameEleven({ proceed }) {
  const [otp, setOtp] = useState('');
  return (
    <View style={styles.background}>
      <HeaderText
        title="Secure your transactions with a safe authorization pin"
        style={styles.leadText}
      />

      <RegularText title="Enter the 4 digit code" style={styles.subText} />
      <OTPInputView
        style={styles.otpContainer}
        secureTextEntry
        pinCount={4}
        code={otp}
        // You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={(code) => setOtp(code)}
        // autoFocusOnLoad
        codeInputFieldStyle={styles.activeOtpInput}
        codeInputHighlightStyle={styles.otpInput}
        // onCodeFilled={(otp) => {
        //   console.log(`Code is, you are good to go!`);
        // }}
      />

      <Divider style={(styles.divider, { marginTop: hp(345) })} />
      <Button
        title="Continue"
        style={styles.button}
        disabled={otp.length !== 4}
        onPress={() => proceed()}
      />
    </View>
  );
}
