import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { ClearIcon, DropdownSvg } from '../../../../../assets/svgs';
import { HeaderText, ParagraphText, RegularText } from '../../../../components';
import { Button } from '../../../../components/Button';
import { Row } from '../../../../components/View';
import { sceneTwo as styles } from '../styles';

export const SceneTwo = ({ progress }) => {
  const [amount, setAmount] = useState('');
  return (
    <>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.topRow}>
        <RegularText title="From Current Account" style={styles.leadText} />
        <HeaderText title="₦7,100,810" style={styles.amount} />
        <DropdownSvg />
      </View>
      <View style={styles.topBlock}>
        <View style={styles.beneficiaryRow}>
          <Row style={styles.cableRow}>
            <HeaderText title="Top-up:" style={styles.beneficiaryTitle} />
            <HeaderText
              title="08023456789 - Airtel"
              style={styles.beneficiaryName}
            />
          </Row>
          <View style={styles.dropdown}>
            <DropdownSvg />
          </View>
        </View>
        <RegularText title="Firstname Lastname" style={styles.bankDetail} />
      </View>
      <View style={styles.midBlock}>
        <ParagraphText title="Enter Amount (₦)" style={styles.amountTitle} />
        <Row style={styles.amountRow}>
          <TextInput
            placeholder="0.00"
            value={amount}
            onChangeText={(value) => setAmount(value)}
            style={styles.amountInput}
          />
          {amount.length ? (
            <TouchableOpacity onPress={() => setAmount('')}>
              <ClearIcon />
            </TouchableOpacity>
          ) : null}
        </Row>
        {amount.length ? (
          <RegularText title="+ ₦100 transaction fee" style={styles.fee} />
        ) : null}
      </View>
      <Row style={styles.bottomBlock}>
        {!amount.length ? (
          <>
            <TouchableOpacity
              style={styles.amountButton}
              onPress={() => setAmount('1000')}>
              <ParagraphText title="1,000" style={styles.amountOption} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.amountButton}
              onPress={() => setAmount('3000')}>
              <ParagraphText title="3,000" style={styles.amountOption} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.amountButton}
              onPress={() => setAmount('5000')}>
              <ParagraphText title="5,000" style={styles.amountOption} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.amountButton}
              onPress={() => setAmount('10000')}>
              <ParagraphText title="10,000" style={styles.amountOption} />
            </TouchableOpacity>
          </>
        ) : (
          <Button
            title="Continue"
            style={styles.button}
            onPress={() => progress()}
          />
        )}
      </Row>
      {/* </KeyboardAwareScrollView> */}
    </>
  );
};
