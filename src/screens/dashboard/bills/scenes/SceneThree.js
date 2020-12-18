import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { BackArrow } from '../../../../../assets/svgs';
import { ParagraphText, RegularText } from '../../../../components';
import { Row } from '../../../../components/View';
import { sceneThree as styles } from '../styles';

const BillList = ({ title, amount, onPress }) => (
  <TouchableOpacity style={styles.categoryView} onPress={onPress}>
    <Row style={styles.categoryRow}>
      <ParagraphText title={title} style={styles.categoryTitle} />
      <ParagraphText title={amount} style={styles.categoryAmount} />
    </Row>
    <Divider style={styles.billDivider} />
  </TouchableOpacity>
);

export const SceneThree = ({ progress }) => {
  return (
    <View>
      <View style={styles.topRow}>
        <Row>
          <BackArrow />
          <RegularText title="Select DSTV psckage" style={styles.leadText} />
        </Row>
      </View>
      <View style={styles.mainBlock}>
        <BillList
          title="150MB - Data Awoof"
          amount="₦ 40,000.00"
          onPress={() => progress()}
        />
        <BillList title="250MB - Data Berekete" amount="₦ 80,500.00" />
        <BillList title="1GB - Data Full Ground" amount="₦ 10,000.00" />
        <BillList title="2GB - Data Yakata" amount="₦ 60,900.00" />
      </View>
    </View>
  );
};
