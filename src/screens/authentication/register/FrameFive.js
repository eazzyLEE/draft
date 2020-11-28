import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Plus } from '../../../../assets/svgs';
import { HeaderText, Input, RegularText } from '../../../components';
import { Button } from '../../../components/Button';
import { frameFive as styles } from './styles';

export default function FrameFive({ proceed }) {
  const [bvn, setBvn] = useState('');
  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <HeaderText title={'Please enter your BVN'} style={styles.leadText} />
        <Input
          label="BVN"
          value={bvn}
          onChange={(value) => setBvn(value)}
          containerStyle={styles.input}
        />
        <View style={styles.bvnRow}>
          <Plus />
          <HeaderText title="Click to get your bvn" style={styles.bvnText} />
        </View>

        <View style={styles.bvnInfo}>
          <HeaderText title="BVN Privacy" style={styles.bvnHeader} />
          <RegularText
            title="BVN is a requirement by CBN for customer verification. Your Bvn does not give us access to your account, we can only access your fullname, Mobile Number and Date of Birth."
            style={styles.subText}
          />
        </View>

        <Divider style={styles.divider} />
        <Button
          title="Let's Validate"
          style={styles.button}
          disabled={!bvn.length}
          onPress={() => proceed()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
