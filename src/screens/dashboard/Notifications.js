import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { airtel, dstv, gtbank } from '../../../assets/images';
import { HeaderText, hp, RegularText } from '../../components';
import BackIcon from '../../components/BackIcon';
import { Image, MainView, Row } from '../../components/View';
import { notificationStyles as styles } from './styles';

const Notifications = () => {
  return (
    <View style={styles.background}>
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Notifications" style={styles.screenTitle} />
      </View>
      <MainView style={styles.mainView}>
        <RegularText title="Recent" style={styles.recent} />
        <Row noSpace style={[styles.itemRow, { marginTop: hp(20) }]}>
          <Image source={dstv} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="DSTV - 348938493857529" style={styles.title} />
            <RegularText
              title="150MB - Data Awoof purchase is successful"
              style={styles.description}
            />
          </View>
          <HeaderText title="2h" style={styles.time} />
        </Row>
        <Divider style={styles.accountDivider} />
        <Row noSpace style={styles.itemRow}>
          <Image source={gtbank} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="Bank Transfer" style={styles.title} />
            <RegularText
              title="N10,000 transfer to 00012345690 GTBank Plc - Firstname Lastname Middlename was successful"
              style={styles.description}
            />
          </View>
          <HeaderText title="4h" style={styles.time} />
        </Row>
        <RegularText title="Older Notifications" style={styles.recent} />
        <Row noSpace style={[styles.itemRow, { marginTop: hp(20) }]}>
          <Image source={airtel} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="Airtel - 08023456789" style={styles.title} />
            <RegularText
              title="N5,000 airtime purchase was unsuccessful"
              style={styles.description}
            />
          </View>
          <HeaderText title="1d" style={styles.time} />
        </Row>
        <Divider style={styles.accountDivider} />
        <Row noSpace style={styles.itemRow}>
          <Image source={dstv} style={styles.notifImage} />
          <View style={styles.accountTypeColumn}>
            <HeaderText title="DSTV - 348938493857529" style={styles.title} />
            <RegularText
              title="150MB - Data Awoof purchase is successful"
              style={styles.description}
            />
          </View>
          <HeaderText title="4d" style={styles.time} />
        </Row>
      </MainView>
    </View>
  );
};

export default Notifications;
