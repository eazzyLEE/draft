import React from 'react';
import {
  Image as ImageFrame,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {
  AirtimeIcon,
  BillIcon,
  ClosedEye,
  ListRightChevrolet,
  TransferIcon,
} from '../../assets/svgs';
import {
  DarkBlue,
  Grey100,
  LinkWater,
  Orange,
  Serenade,
  Smoke400,
  White,
} from './Colors';
import { HeaderText, ParagraphText, RegularText } from './Text';
import { hp, wp } from './utils';

export const MainView = (props) => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

export const TouchableView = (props) => {
  return (
    <TouchableOpacity
      style={[styles.mainBackground, props.style]}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export const Row = (props) => (
  <View style={[styles.row, props.noSpace && styles.noRowSpace, props.style]}>
    {props.children}
  </View>
);

export const Image = (props) => (
  <ImageFrame source={props.source} style={props.style} resizeMode="contain" />
);

export const AccountCard = ({ data }) => {
  const { account_number, name, balance } = data;
  return (
    <View style={styles.accountCard}>
      <Row style={styles.leadAccountRow}>
        <ParagraphText title={name} style={styles.accountName} />
        <ParagraphText title={account_number} style={styles.accountNumber} />
      </Row>
      <Row style={styles.balanceRow}>
        <HeaderText title={balance} style={styles.accountBalance} />
        <ClosedEye />
      </Row>
      <Row noSpace style={styles.leadItemRow}>
        <TransferIcon />
        <View style={styles.accountTypeColumn}>
          <HeaderText title="Transfers" style={styles.accountType} />
          <RegularText title="31 Transactions" style={styles.typeCount} />
        </View>
        <HeaderText title="1,020,580" style={styles.accountValue} />
      </Row>
      <Divider style={styles.accountDivider} />
      <Row noSpace style={styles.itemRow}>
        <BillIcon />
        <View style={styles.accountTypeColumn}>
          <HeaderText title="Bill Payments" style={styles.accountType} />
          <RegularText title="17 Transactions" style={styles.typeCount} />
        </View>
        <HeaderText title="56,180" style={styles.accountValue} />
      </Row>
      <Divider style={styles.accountDivider} />
      <Row noSpace style={styles.itemRow}>
        <AirtimeIcon />
        <View style={styles.accountTypeColumn}>
          <HeaderText title="Airtime" style={styles.accountType} />
          <RegularText title="10 Transactions" style={styles.typeCount} />
        </View>
        <HeaderText title="5,000" style={styles.accountValue} />
      </Row>
      <Divider style={styles.accountDivider} />
    </View>
  );
};

const progressbar = (
  <View style={{ marginLeft: wp(75.3) }}>
    <Progress.Bar
      progress={0.4}
      width={wp(40)}
      height={hp(8)}
      color={Orange}
      borderColor={White}
      unfilledColor={LinkWater}
      borderRadius={20}
    />
  </View>
);

export const SettingsItem = ({ icon, title, style, last, progress }) => {
  return (
    <>
      <TouchableOpacity style={[styles.settingsRow, style]}>
        <View style={styles.iconView}>{icon}</View>
        <HeaderText title={title} style={styles.settingsTitle} />
        {progress ? progressbar : null}
        <View style={styles.rightItem}>
          <ListRightChevrolet />
        </View>
      </TouchableOpacity>
      {!last ? <Divider style={styles.settingsDivider} /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
    width: wp(360),
    marginTop: hp(49),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  noRowSpace: {
    justifyContent: 'flex-start',
  },
  accountCard: {
    backgroundColor: White,
    width: wp(300),
    height: hp(376),
    borderRadius: 20,
  },
  leadAccountRow: {
    marginTop: hp(28),
    width: wp(268),
  },
  accountName: {
    fontSize: 16,
    color: DarkBlue,
    fontWeight: 'bold',
  },
  accountNumber: {
    fontSize: 16,
    color: Smoke400,
    fontWeight: '500',
  },
  balanceRow: {
    marginTop: hp(16),
    width: wp(268),
  },
  accountBalance: {
    fontSize: 28,
    color: DarkBlue,
  },
  leadItemRow: {
    width: wp(268),
    marginTop: hp(36),
  },
  accountTypeColumn: {
    marginLeft: wp(19),
  },
  accountType: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  typeCount: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Smoke400,
  },
  accountValue: {
    position: 'absolute',
    right: 0,
    // marginLeft: wp()
  },
  accountDivider: {
    width: wp(237),
    height: 2,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
  itemRow: {
    width: wp(268),
    marginTop: hp(16),
  },
  settingsRow: {
    width: wp(328),
    marginTop: hp(16),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rightItem: {
    position: 'absolute',
    right: 0,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: wp(20),
  },
  settingsDivider: {
    width: wp(344),
    height: 1,
    alignSelf: 'flex-end',
    backgroundColor: Grey100,
    marginTop: hp(16),
    opacity: 0.5,
  },
  iconView: {
    width: wp(40),
    height: hp(40),
    borderRadius: 8,
    backgroundColor: Serenade,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
