import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Messaging } from '../../../../../assets/svgs';
import { DarkBlue, HeaderText, RegularText } from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { MainView } from '../../../../components/View';
import { updatePinStyles as styles } from './styles';
import { Button } from '../../../../components/Button';

const UpdatePin = () => {
  const [otp, setOtp] = useState('');
  const [confirmOtp, setConfirmOtp] = useState('');

  const newPin = otp.length === 4;

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Change PIN" style={styles.leadText} />
      </View>
      <MainView style={styles.mainView}>
        <HeaderText
          // eslint-disable-next-line quotes
          title={newPin ? 'Set New PIN' : "We've sent a 4-digit code to you"}
          style={styles.instruction}
        />
        <RegularText
          title={
            newPin
              ? 'Enter a new 4-digit code'
              : 'Enter the 4 digit code sent to 0808 **** 1234'
          }
          style={styles.subText}
        />
        <OTPInputView
          style={styles.otpContainer}
          secureTextEntry
          pinCount={4}
          code={newPin ? confirmOtp : otp}
          // You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={(code) =>
            newPin ? setConfirmOtp(code) : setOtp(code)
          }
          // autoFocusOnLoad
          codeInputFieldStyle={styles.activeOtpInput}
          codeInputHighlightStyle={styles.otpInput}
          // onCodeFilled={(otp) => {
          //   console.log(`Code is, you are good to go!`);
          // }}
        />
        {!newPin ? (
          <View style={styles.timerRow}>
            <View style={styles.messageRow}>
              <Messaging />
              <HeaderText title="Resend SMS" style={styles.smsText} />
            </View>
            <RegularText title="00 : 59" style={styles.timerText} />
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Button
              title="Save New PIN"
              style={styles.button}
              // disabled={!email.length}
              onPress={() => Actions.pop()}
            />
          </View>
        )}
      </MainView>
    </View>
  );
};

export default UpdatePin;
