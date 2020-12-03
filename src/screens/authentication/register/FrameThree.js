import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { HeaderText, RegularText } from '../../../components';
import { Button } from '../../../components/Button';
import { frameThree as styles } from './styles';
import { Messaging } from '../../../../assets/svgs';

export default function FrameThree({ proceed }) {
  const [otp, setOtp] = useState('');
  return (
    <View style={styles.background}>
      <HeaderText
        title="Kindly verify your number with the OTP you just received"
        style={styles.leadText}
      />
      <View style={styles.mobileNumberView}>
        <RegularText title="Enter Mobile Number" style={styles.mobileTitle} />
        <RegularText title="08023456789" style={styles.mobileValue} />
      </View>

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
      <View style={styles.timerRow}>
        <View style={styles.messageRow}>
          <Messaging />
          <HeaderText title="Resend SMS" style={styles.smsText} />
        </View>
        <RegularText title="00 : 59" style={styles.timerText} />
      </View>

      <Divider style={styles.divider} />
      <Button
        title="Continue"
        style={styles.button}
        disabled={otp.length !== 4}
        onPress={() => proceed()}
      />
    </View>
  );
}
