import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { HeaderText, RegularText } from '../../../../components';
import { Image, Row } from '../../../../components/View';
import { sceneFour as styles } from '../styles';
import { blueTouchId } from '../../../../../assets/images';

export const SceneFour = ({ progress }) => {
  const [biometrics, setBiometrics] = useState(false);
  const [otp, setOtp] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topRow}>
        <RegularText title="Send money to 2 accounts" style={styles.leadText} />
      </View>
      <View style={styles.bottomRow}>
        <Row style={styles.authorizationRow}>
          <HeaderText
            title="Authorize Transfers"
            style={styles.authorizationText}
          />
          <TouchableOpacity onPress={() => setBiometrics(!biometrics)}>
            <HeaderText
              title={biometrics ? 'Use 4-digit PIN' : 'Use Fingerprint'}
              style={styles.fingerprintText}
            />
          </TouchableOpacity>
        </Row>
        {!biometrics ? (
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
            onCodeFilled={() => progress()}
          />
        ) : (
          <TouchableOpacity
            style={styles.touchIdBackground}
            onPress={() => progress()}>
            <Image source={blueTouchId} style={styles.touchId} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
