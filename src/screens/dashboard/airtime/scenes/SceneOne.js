import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BackArrow, Close } from '../../../../../assets/svgs';
import { HeaderText, hp, RegularText } from '../../../../components';
import { Button } from '../../../../components/Button';
import { FlatList } from '../../../../components/List';
import { Switch } from '../../../../components/Switch';
import {
  BankListItem,
  BeneficiaryItem,
  Row,
} from '../../../../components/View';
import { sceneOne as styles } from '../styles';

const data = ['Airtel', 'Glo', 'MTN', 'Glo', '9mobile'];

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

export const SceneOne = ({ progress }) => {
  const [accountNumber, setAccount] = useState('');
  const [savedBeneficiary, newBeneficiary] = useState(true);
  const [bankList, showBanks] = useState(false);
  const [toggled, setToggle] = useState(false);
  return (
    <View>
      {!bankList ? (
        <KeyboardAwareScrollView>
          <View style={styles.topRow}>
            <RegularText title="From Current Account" style={styles.leadText} />
            <HeaderText title="₦7,100,810" style={styles.amount} />
          </View>
          <View style={styles.mainBlock}>
            <View style={styles.recipientGrid}>
              <HeaderText title="Recipient Info" style={styles.recipient} />
              <TouchableOpacity
                onPress={() => newBeneficiary(!savedBeneficiary)}>
                <HeaderText
                  title={'Choose from device'}
                  style={styles.beneficiary}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              value={accountNumber}
              onChangeText={(value) => setAccount(value)}
              placeholder="Enter Mobile Number"
              style={styles.input}
            />
            {savedBeneficiary ? (
              <FlatList
                data={data}
                renderItem={({ item }) => <BeneficiaryItem item={item} phone />}
              />
            ) : (
              <>
                <Row style={styles.beneficiaryRow}>
                  <View style={styles.rightItem}>
                    <Switch value={toggled} onValueChange={setToggle} />
                  </View>
                  <RegularText
                    title="Save Number"
                    style={styles.beneficiarySave}
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
