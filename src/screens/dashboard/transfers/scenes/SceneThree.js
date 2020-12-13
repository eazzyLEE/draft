import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { DropdownSvg } from '../../../../../assets/svgs';
import { HeaderText, ParagraphText, RegularText } from '../../../../components';
import { Image, Row } from '../../../../components/View';
import { sceneThree as styles } from '../styles';
import { blueTouchId } from '../../../../../assets/images';

export const SceneThree = ({ proceed }) => {
  const [otp, setOtp] = useState('');
  const [biometrics, setBiometrics] = useState(true);
  return (
    <View styl={{ flex: 1 }}>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.topRow}>
        <RegularText title="From Current Account" style={styles.leadText} />
        <HeaderText title="N7,100,810" style={styles.amount} />
        <DropdownSvg />
      </View>
      <View style={styles.topBlock}>
        <View style={styles.beneficiaryRow}>
          <HeaderText title="To:" style={styles.beneficiaryTitle} />
          <HeaderText
            title="Firstname Lastname Middlename"
            style={styles.beneficiaryName}
          />
          <View style={styles.dropdown}>
            <DropdownSvg />
          </View>
        </View>
        <RegularText
          title="0123456789 - Stanbic IBTC Bank"
          style={styles.bankDetail}
        />
      </View>
      <View style={styles.midBlock}>
        <Row style={styles.amountRow}>
          <Row style={styles.amountSubRow}>
            <ParagraphText title="Amount" style={styles.amountText} />
            <ParagraphText title="₦ 5,000" style={styles.amountValue} />
          </Row>
          <DropdownSvg />
        </Row>
      </View>
      <View style={styles.bottomBlock}>
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
            onCodeFilled={() => {
              proceed();
            }}
          />
        ) : (
          <TouchableOpacity
            style={styles.touchIdBackground}
            onPress={() => proceed()}>
            <Image source={blueTouchId} style={styles.touchId} />
          </TouchableOpacity>
        )}
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};
