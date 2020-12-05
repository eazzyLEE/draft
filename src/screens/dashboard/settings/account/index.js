import React from 'react';
import { StatusBar, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { ButtonPlus } from '../../../../../assets/svgs';
import {
  DarkBlue,
  HeaderText,
  hp,
  ParagraphText,
  RegularText,
} from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { Button } from '../../../../components/Button';
import { MainView, Row } from '../../../../components/View';
import { accountStyles as styles } from './styles';

const AccountView = ({ accountName }) => (
  <View style={styles.accountCard}>
    <Row style={[styles.accountRow, { marginTop: hp(16) }]}>
      <RegularText title="Account Name:" style={styles.accountTitle} />
      <ParagraphText title={accountName} style={styles.accountValue} />
    </Row>
    <Row style={styles.accountRow}>
      <RegularText title="Account Number:" style={styles.accountTitle} />
      <ParagraphText title="0001234567" style={styles.accountValue} />
    </Row>
    <Divider style={styles.divider} />
    <ParagraphText title="Copy Account Number" style={styles.copy} />
  </View>
);

const Account = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Account Management" style={styles.leadText} />
      </View>
      <MainView style={styles.mainView}>
        <AccountView accountName="Savings Account" />
        <AccountView accountName="Current Account" />
        <View style={styles.bottomContainer}>
          <Button title="Add New" style={styles.button} icon={<ButtonPlus />} />
        </View>
      </MainView>
    </View>
  );
};

export default Account;
