import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { HeaderText, Input } from '../../../components';
import { Button } from '../../../components/Button';
import { frameTwo as styles } from './styles';

export default function FrameTwo({ proceed }) {
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.background}>
      <HeaderText
        title="Let's get started with your preferred mobile number"
        style={styles.leadText}
      />
      <Input
        label="Mobile Number"
        value={phone}
        onChange={(value) => setPhone(value)}
        containerStyle={styles.input}
        keyboardType="number-pad"
      />

      <View style={styles.termsContainer}>
        <Text style={styles.termsWrapper}>
          By proceeding with your mobile number, you agree to TrustBanc
          <Text style={styles.termsText}>Terms & Conditions</Text>
        </Text>
      </View>

      <Divider style={styles.divider} />
      <Button
        title="Continue"
        style={styles.button}
        disabled={!phone}
        onPress={() => proceed()}
      />
    </View>
  );
}
