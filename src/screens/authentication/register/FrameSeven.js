import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HeaderText, hp, Input } from '../../../components';
import { Button } from '../../../components/Button';
import { frameFive as styles } from './styles';

const FrameSeven = ({ proceed }) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <HeaderText
          title="We'll keep you informed at all times with our emails"
          style={styles.leadText}
        />
        <Input
          label="Email"
          value={email}
          onChange={(value) => setEmail(value)}
          containerStyle={styles.input}
          keyboardType="email-address"
        />

        <Divider style={[styles.divider, { marginTop: hp(415) }]} />
        <Button
          title="Continue"
          style={styles.button}
          disabled={!email.length}
          onPress={() => proceed()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FrameSeven;
