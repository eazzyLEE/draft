import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HeaderText, hp, Input } from '../../../components';
import { Button } from '../../../components/Button';
import { frameFive as styles } from './styles';

const FrameTen = ({ proceed }) => {
  const [bvn, setBvn] = useState('');
  const [dob, setDob] = useState('');
  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <HeaderText title={'Where do you live?'} style={styles.leadText} />
        <Input
          label="Address"
          value={bvn}
          onChange={(value) => setBvn(value)}
          containerStyle={styles.input}
          keyboardType="number-pad"
        />
        <Input
          label="City"
          value={dob}
          onChange={(value) => setDob(value)}
          containerStyle={styles.dobInput}
        />
        <Input
          label="Landmark"
          value={dob}
          onChange={(value) => setDob(value)}
          containerStyle={styles.dobInput}
        />
        <Input
          label="State"
          value={dob}
          onChange={(value) => setDob(value)}
          containerStyle={styles.dobInput}
        />
        <Input
          label="Country"
          value={dob}
          onChange={(value) => setDob(value)}
          containerStyle={styles.dobInput}
        />

        <Divider style={[styles.divider, { marginTop: hp(158) }]} />
        <Button
          title="Continue"
          style={styles.button}
          // disabled={!bvn.length}
          onPress={() => proceed()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FrameTen;
