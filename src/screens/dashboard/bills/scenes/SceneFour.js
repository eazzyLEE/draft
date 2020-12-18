import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DropdownSvg } from '../../../../../assets/svgs';
import { HeaderText, ParagraphText, RegularText } from '../../../../components';
import { Button } from '../../../../components/Button';
import { Row } from '../../../../components/View';
import { sceneFour as styles } from '../styles';

export const SceneFour = ({ progress }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.topRow}>
        <RegularText title="From Current Account" style={styles.leadText} />
        <HeaderText title="N7,100,810" style={styles.amount} />
        <DropdownSvg />
      </View>
      <View style={styles.topBlock}>
        <View style={styles.beneficiaryRow}>
          <Row style={styles.cableRow}>
            <HeaderText title="Cable TV:" style={styles.beneficiaryTitle} />
            <HeaderText title="DSTV" style={styles.beneficiaryName} />
          </Row>
          <View style={styles.dropdown}>
            <DropdownSvg />
          </View>
        </View>
        <RegularText
          title="150MB - Data Awoof (₦40,000)"
          style={styles.bankDetail}
        />
      </View>
      <View style={styles.midBlock}>
        <Row style={styles.infoGrid}>
          <ParagraphText title="Payer Info" style={styles.infoText} />
          <HeaderText title="New Smart Card" style={styles.smartCard} />
        </Row>
      </View>
      <TouchableOpacity style={styles.smartCardInput}>
        <View style={styles.bankView}>
          <RegularText title="DSTV Smart Card Number" style={styles.bankText} />
          <DropdownSvg />
        </View>
      </TouchableOpacity>
      <Button
        title="Continue"
        style={styles.button}
        onPress={() => progress()}
      />
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};
