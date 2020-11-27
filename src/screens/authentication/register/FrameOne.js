import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { HeaderText, ParagraphText, RegularText } from '../../../components';
import { Button } from '../../../components/Button';
import { frameOne as styles } from './styles';

const Selector = ({ title, subText, select, selected }) => (
  <TouchableOpacity
    style={[styles.selectContainer, selected && styles.selectedContainer]}
    onPress={() => select()}>
    <View style={styles.selectRow}>
      <ParagraphText
        title={title}
        style={[styles.account, selected && styles.selectedAccount]}
      />
      <View style={[styles.selector, selected && styles.activeSelector]} />
    </View>
    <RegularText
      title={subText}
      style={[styles.subText, selected && styles.selectedText]}
    />
  </TouchableOpacity>
);

export default function FrameOne() {
  const [selected, select] = useState(0);
  return (
    <View>
      <HeaderText
        title="Which account would you like to sign up to?"
        style={styles.leadText}
      />
      <Selector
        title="Personal Account"
        subText="Lorem ipsum dolor sit amet, consectetur adipiscing. Id in tincidunt venenatis etiam."
        selected={selected === 1}
        select={() => select(1)}
      />
      <Selector
        title="Personal Account"
        subText="Lorem ipsum dolor sit amet, consectetur adipiscing. Id in tincidunt venenatis etiam."
        selected={selected === 2}
        select={() => select(2)}
      />
      <Divider style={styles.divider} />
      <Button title="Continue" style={styles.button} disabled={!selected} />
    </View>
  );
}
