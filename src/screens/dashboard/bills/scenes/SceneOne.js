import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {
  CableTv,
  Internet,
  Medical,
  Utilties,
} from '../../../../../assets/svgs';
import { HeaderText, ParagraphText, RegularText } from '../../../../components';
import { Row } from '../../../../components/View';
import { sceneOne as styles } from '../styles';

const BillCategory = ({ svg, title, onPress }) => (
  <TouchableOpacity style={styles.categoryView} onPress={onPress}>
    <Row style={styles.categoryRow}>
      <View style={styles.categoryIcon}>{svg}</View>
      <ParagraphText title={title} style={styles.categoryTitle} />
    </Row>
    <Divider style={styles.billDivider} />
  </TouchableOpacity>
);

export const SceneOne = ({ progress }) => {
  return (
    <View>
      <View style={styles.topRow}>
        <RegularText title="From Current Account" style={styles.leadText} />
        <HeaderText title="N7,100,810" style={styles.amount} />
      </View>
      <View style={styles.mainBlock}>
        <Row style={styles.mainRow}>
          <HeaderText title="Select a category" style={styles.category} />
          <HeaderText title="Search" style={styles.search} />
        </Row>
        <BillCategory
          svg={<CableTv />}
          title="Cable TV"
          onPress={() => progress()}
        />
        <BillCategory svg={<Internet />} title="Internet Service" />
        <BillCategory svg={<Medical />} title="Medical" />
        <BillCategory svg={<Utilties />} title="Utilities" />
      </View>
    </View>
  );
};
