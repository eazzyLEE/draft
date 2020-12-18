import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { DropdownSvg } from '../../../../../assets/svgs';
import { HeaderText, ParagraphText, RegularText } from '../../../../components';
import { Image, Row } from '../../../../components/View';
import { sceneFive as styles } from '../styles';
import { blueTouchId } from '../../../../../assets/images';

export const SceneFive = ({ progress }) => {
  const [otp, setOtp] = useState('');
  const [biometrics, setBiometrics] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.topRow}>
        <RegularText title="From Current Account" style={styles.leadText} />
        <HeaderText title="N7,100,810" style={styles.amount} />
        <DropdownSvg />
      </View>
      <View style={styles.topBlock}>
        <View style={styles.beneficiaryRow}>
          <Row style={styles.cableRow}>
            <HeaderText title="Cable TV:" style={styles.beneficiaryTitle} />
            <HeaderText title="DSTV" style={styles.beneficiaryName} />
          </Row>
          <View style={styles.dropdown}>
            <DropdownSvg />
          </View>
        </View>
        <RegularText
          title="150MB - Data Awoof (₦40,000)"
          style={styles.bankDetail}
        />
      </View>
      <View style={styles.midBlock}>
        <Row style={styles.amountRow}>
          <Row style={styles.amountSubRow}>
            <ParagraphText title="Smart Card No" style={styles.amountText} />
            <ParagraphText title="348938493857529" style={styles.amountValue} />
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
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};
