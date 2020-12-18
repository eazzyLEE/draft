import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { airtel, dstv, gtbank } from '../../../../assets/images';
import { Download, Filter, Search } from '../../../../assets/svgs';
import {
  HeaderText,
  hp,
  Orange,
  RegularText,
  White,
  wp,
} from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { Image, MainView, Row } from '../../../components/View';
import { transactionStyles as styles } from './styles';

const Transactions = () => {
  return (
    <View style={styles.background}>
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="All Transactions" style={styles.screenTitle} />
        <View style={styles.searchNav}>
          <Search fill={White} />
        </View>
        <View style={[styles.searchNav, { marginLeft: wp(20) }]}>
          <Filter />
        </View>
      </View>
      <MainView style={styles.mainView}>
        <RegularText title="Today - 09 Jun 20" style={styles.recent} />
        <TouchableOpacity onPress={() => Actions.transaction_detail()}>
          <Row noSpace style={[styles.itemRow, { marginTop: hp(20) }]}>
            <Image source={dstv} style={styles.notifImage} />
            <View style={styles.accountTypeColumn}>
              <HeaderText title="DSTV Premium" style={styles.title} />
              <RegularText title="348938493857529" style={styles.description} />
            </View>
            <HeaderText title="₦18,750" style={styles.time} />
          </Row>
        </TouchableOpacity>
        <Divider style={styles.accountDivider} />
        <TouchableOpacity onPress={() => Actions.transaction_detail()}>
          <Row noSpace style={styles.itemRow}>
            <Image source={gtbank} style={styles.notifImage} />
            <View style={styles.accountTypeColumn}>
              <HeaderText title="Firstname Lastname" style={styles.title} />
              <RegularText
                title="0001234567 - GT Bank Pl..."
                style={styles.description}
              />
            </View>
            <HeaderText title="₦40,050" style={styles.time} />
          </Row>
        </TouchableOpacity>
        <Divider style={styles.accountDivider} />
        <Row noSpace style={styles.itemRow}>
          <Image source={dstv} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="DSTV Premium" style={styles.title} />
            <RegularText
              title="0001234567 - Stanbic Pl..."
              style={styles.description}
            />
          </View>
          <HeaderText title="₦4,750" style={styles.time} />
        </Row>
        <RegularText title="Yesterday - 08 Jun 20" style={styles.recent} />

        <Row noSpace style={styles.itemRow}>
          <Image source={dstv} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="DSTV Premium" style={styles.title} />
            <RegularText
              title="0001234567 - Stanbic Pl..."
              style={styles.description}
            />
          </View>
          <HeaderText title="₦4,750" style={styles.time} />
        </Row>
        <Divider style={styles.accountDivider} />
        <Row noSpace style={[styles.itemRow, { marginTop: hp(20) }]}>
          <Image source={airtel} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="Airtime" style={styles.title} />
            <RegularText title="08023456789" style={styles.description} />
          </View>
          <HeaderText title="₦500" style={styles.time} />
        </Row>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: Orange }}
          position="bottomRight"
          onPress={() => {}}>
          <Download />
        </Fab>
      </MainView>
    </View>
  );
};

export default Transactions;
