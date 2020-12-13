import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BackArrow, Close, DropdownSvg } from '../../../../../assets/svgs';
import { HeaderText, hp, RegularText, wp } from '../../../../components';
import { Button } from '../../../../components/Button';
import { FlatList } from '../../../../components/List';
import {
  BankListItem,
  BeneficiaryItem,
  Row,
} from '../../../../components/View';
import { sceneOne as styles } from '../styles';

const data = [
  'Access Bank',
  'Alat MFB',
  'First Bank of Nigeria',
  'GT Bank',
  'Stanbic IBTC Bank',
  'Providus Bank',
  'Polaris Bank',
  'UBA',
  'Wema Bank',
];

const BankSearch = ({ closeBankList }) => {
  return (
    <>
      <View style={styles.topBankRow}>
        <TouchableOpacity onPress={() => closeBankList()}>
          <BackArrow />
        </TouchableOpacity>
        <TextInput placeholder="Search for bank" style={styles.searchInput} />
        <TouchableOpacity style={styles.close}>
          <Close />
        </TouchableOpacity>
      </View>
      <View style={[styles.mainBlock, { marginTop: hp(10) }]}>
        <FlatList
          data={data}
          renderItem={({ item }) => <BankListItem item={item} />}
        />
      </View>
    </>
  );
};

export const CurrentScreenOne = ({ progress }) => {
  const [accountNumber, setAccount] = useState('');
  const [savedBeneficiary, newBeneficiary] = useState(false);
  const [bankList, showBanks] = useState(false);
  return (
    <View>
      {!bankList ? (
        <KeyboardAwareScrollView>
          <View style={styles.topRow}>
            <RegularText title="From Current Account" style={styles.leadText} />
            <HeaderText title="N7,100,810" style={styles.amount} />
          </View>
          <View style={styles.mainBlock}>
            <View style={styles.recipientGrid}>
              <HeaderText title="Recipient Details" style={styles.recipient} />
              <TouchableOpacity
                onPress={() => newBeneficiary(!savedBeneficiary)}>
                <HeaderText
                  title={
                    savedBeneficiary ? 'New Beneficiary' : 'Saved Beneficiary'
                  }
                  style={styles.beneficiary}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              value={accountNumber}
              onChangeText={(value) => setAccount(value)}
              placeholder="Enter Account Number"
              style={styles.input}
            />
            {savedBeneficiary ? (
              <FlatList
                data={data}
                renderItem={({ item }) => <BeneficiaryItem item={item} />}
              />
            ) : (
              <>
                <TouchableOpacity
                  style={[
                    styles.input,
                    {
                      justifyContent: 'center',
                      paddingRight: wp(10),
                      marginTop: hp(2),
                    },
                  ]}
                  onPress={() => showBanks(true)}>
                  <View style={styles.bankView}>
                    <RegularText title="Select Bank" style={styles.bankText} />
                    <DropdownSvg />
                  </View>
                </TouchableOpacity>
                <Row style={styles.beneficiaryRow}>
                  <RegularText
                    title="Beneficiary:"
                    style={styles.beneficiaryTitle}
                  />
                  <HeaderText
                    title="Firstname Middlename Lastname"
                    style={styles.beneficiaryName}
                  />
                </Row>
                <Button
                  title="Continue"
                  style={styles.button}
                  onPress={() => progress()}
                />
              </>
            )}
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <BankSearch closeBankList={() => showBanks(false)} />
      )}
    </View>
  );
};
