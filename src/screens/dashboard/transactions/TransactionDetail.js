import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { gtbank } from '../../../../assets/images';
import { HeaderText, hp, RegularText } from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { Button } from '../../../components/Button';
import { Image, MainView, Row } from '../../../components/View';
import { transactionDetailStyles as styles } from './styles';

const TransactionDetail = () => {
  return (
    <View style={styles.background}>
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Bank Transfer" style={styles.screenTitle} />
      </View>
      <MainView style={styles.mainView}>
        <View style={[styles.menuView, { marginTop: hp(32) }]}>
          <RegularText title="Recipient" style={styles.title} />
          <RegularText
            title="Firstname Lastname Middlename"
            style={styles.value}
          />
        </View>
        <Divider style={styles.accountDivider} />
        <View style={styles.menuView}>
          <RegularText title="Account Number" style={styles.title} />
          <RegularText
            title="Firstname Lastname Middlename"
            style={styles.value}
          />
        </View>
        <Divider style={styles.accountDivider} />
        <View style={styles.menuView}>
          <Row style={styles.menuRow}>
            <View>
              <RegularText title="Bank" style={styles.title} />
              <RegularText title="GT Bank Plc" style={styles.value} />
            </View>
            <Image source={gtbank} style={styles.notifImage} />
          </Row>
        </View>
        <Divider style={styles.accountDivider} />
        <Row style={styles.menuGrid}>
          <View>
            <RegularText title="Bank" style={styles.title} />
            <RegularText title="GT Bank Plc" style={styles.value} />
          </View>
          <View>
            <RegularText title="Fee" style={styles.title} />
            <RegularText title="0.00" style={styles.value} />
          </View>
        </Row>
        <Divider style={styles.accountDivider} />
        <Row style={styles.menuGrid}>
          <View>
            <RegularText title="Date" style={styles.title} />
            <RegularText title="Thursday, Sep 29, 2019" style={styles.value} />
          </View>
          <View>
            <RegularText title="Time" style={styles.title} />
            <RegularText title="5:02 PM" style={styles.value} />
          </View>
        </Row>
        <Divider style={styles.accountDivider} />
        <Row style={styles.menuGrid}>
          <View>
            <RegularText title="Status" style={styles.title} />
            <RegularText title="Successful" style={styles.value} />
          </View>
          <View>
            <RegularText title="Reference" style={styles.title} />
            <RegularText title="X237398" style={styles.value} />
          </View>
        </Row>
        <Divider style={styles.accountDivider} />
        <View style={styles.menuView}>
          <RegularText title="Session ID" style={styles.title} />
          <RegularText
            title="090175190929040254092994182401"
            style={styles.value}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            title="Report"
            light
            style={styles.button}
            onPress={() => this.closeNotificationToggle()}
          />
          <Button
            title="Export"
            style={styles.button}
            onPress={() => this.activateNotificationToggle()}
          />
        </View>
      </MainView>
    </View>
  );
};

export default TransactionDetail;
