import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HeaderText, Input } from '../../../components';
import { Button } from '../../../components/Button';
import { frameFive as styles } from './styles';

const FrameSix = ({ proceed }) => {
  const [bvn, setBvn] = useState('');
  const [dob, setDob] = useState('');
  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <HeaderText
          title={'Hello firstname, please confirm these BVN details'}
          style={styles.leadText}
        />
        <Input
          label="Last 5 digits of mobile number"
          value={bvn}
          onChange={(value) => setBvn(value)}
          containerStyle={styles.input}
          keyboardType="number-pad"
        />
        <Input
          label="Date of Birth"
          value={dob}
          onChange={(value) => setDob(value)}
          containerStyle={styles.dobInput}
        />

        <Divider style={[styles.divider, styles.frameSixDivider]} />
        <Button
          title="Continue"
          style={styles.button}
          disabled={!bvn.length}
          onPress={() => proceed()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FrameSix;
