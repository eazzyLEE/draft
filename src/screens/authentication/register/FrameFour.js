import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GreenCheck } from '../../../../assets/svgs';
import { HeaderText, Input, ParagraphText } from '../../../components';
import { Button } from '../../../components/Button';
import { frameFour as styles } from './styles';

export default function FrameFour({ proceed }) {
  const [password, setPassword] = useState('');
  const lowercase = new RegExp('(?=.*[a-z])');
  const uppercase = new RegExp('(?=.*[A-Z])');
  const specialCharacters = new RegExp('(?=.[=!@#$%])');
  const length = new RegExp('(?=.{8,})');

  const itemCheck = (title, selected) => {
    return (
      <View style={styles.itemCheckView}>
        {selected ? <GreenCheck /> : <View style={styles.nullCheck} />}
        <ParagraphText
          title={title}
          style={selected ? styles.checkedText : styles.checkText}
        />
      </View>
    );
  };

  const completeCheck =
    length.test(password) &&
    uppercase.test(password) &&
    lowercase.test(password) &&
    specialCharacters.test(password);
  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <HeaderText
          title={'Your security is key! \nSet a strong password here'}
          style={styles.leadText}
        />
        <Input
          label="Password"
          value={password}
          onChange={(value) => setPassword(value)}
          containerStyle={styles.input}
        />

        <View style={styles.checkWrapper}>
          {itemCheck('8 or more characters', length.test(password))}
          {itemCheck('An uppercase letter', uppercase.test(password))}
          {itemCheck('A lowercase letter', lowercase.test(password))}
          {itemCheck('A symbol (=!@#$%)', specialCharacters.test(password))}
        </View>

        <Divider style={styles.divider} />
        <Button
          title="Continue"
          style={styles.button}
          disabled={!completeCheck}
          onPress={() => proceed()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
