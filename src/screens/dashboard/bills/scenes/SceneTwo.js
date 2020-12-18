import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { BackArrow, Search } from '../../../../../assets/svgs';
import { ParagraphText, RegularText } from '../../../../components';
import { Row } from '../../../../components/View';
import { sceneTwo as styles } from '../styles';

const BillList = ({ title, onPress }) => (
  <TouchableOpacity style={styles.categoryView} onPress={onPress}>
    <ParagraphText title={title} style={styles.categoryTitle} />
    <Divider style={styles.billDivider} />
  </TouchableOpacity>
);

export const SceneTwo = ({ progress }) => {
  return (
    <View>
      <View style={styles.topRow}>
        <Row>
          <BackArrow />
          <RegularText
            title="Select preferred biller"
            style={styles.leadText}
          />
        </Row>
        <Search />
      </View>
      <View style={styles.mainBlock}>
        <BillList title="DSTV" onPress={() => progress()} />
        <BillList title="GOTV" />
        <BillList title="Star Times" />
        <BillList title="Hi TV" />
        <BillList title="Iroko TV" />
        <BillList title="Neftlix" />
      </View>
    </View>
  );
};
