import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { profileLarge } from '../../../../assets/images';
import {
  Account,
  Biometrics,
  Document,
  Logout,
  Notification,
  Privacy,
  Profile,
  ProfileGroup,
  Security,
  Support,
  Terms,
} from '../../../../assets/svgs';
import {
  HawkesBlue,
  HeaderText,
  hp,
  LinkWater,
  ParagraphText,
  RegularText,
  White,
} from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { BottomSheet } from '../../../components/BottomSheet';
import { Button } from '../../../components/Button';
import {
  Image,
  MainView,
  SettingsItem,
  SettingsToggle,
} from '../../../components/View';
import { settingStyles as styles } from './styles';

export default class Settings extends Component {
  state = {
    active: 'top',
    top: [White, HawkesBlue, LinkWater],
    mid: [HawkesBlue, White, LinkWater],
    base: [HawkesBlue, LinkWater, White],
    biometrics: false,
    notifications: false,
  };

  setView = (section) => this.setState({ active: section });

  openBottomSheet = (ref) => {
    this.BottomOverlay = ref;
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  handleNotificationToggle = () => {
    if (!this.state.notifications) {
      this.BottomOverlay.open();
    } else this.handleChange('notifications', !this.state.notifications);
  };

  closeNotificationToggle = () => this.BottomOverlay.close();

  activateNotificationToggle = () => {
    this.BottomOverlay.close();
    this.handleChange('notifications', !this.state.notifications);
  };

  midSectionStyle = () => {
    if (this.state.active === 'mid')
      return [styles.midView, { backgroundColor: this.state.mid[1] }];
    if (this.state.active === 'base')
      return [
        styles.midInactiveView,
        {
          height: hp(497), // hp(467),
          backgroundColor: this.state.base[1],
        },
      ];
    return [styles.midInactiveView, { backgroundColor: this.state.top[1] }];
  };

  mainContent = (
    <>
      <SettingsItem
        icon={<Account />}
        title="Account Management"
        style={{ marginTop: hp(4) }}
        onPress={() => Actions.account()}
      />
      <SettingsItem
        icon={<ProfileGroup />}
        title="Next of Kin"
        onPress={() => Actions.next_of_kin()}
      />
      <SettingsItem
        icon={<Profile />}
        title="Edit Profile"
        onPress={() => Actions.profile()}
      />
      <SettingsItem
        icon={<Document />}
        title="Document & KYC"
        onPress={() => Actions.kyc()}
        last
        progress
      />
    </>
  );

  render() {
    const { active } = this.state;
    const titleColor = (section) =>
      active !== section ? styles.disabledTitle : {};
    const midContent = (
      <>
        <SettingsItem
          icon={<Security />}
          title="Security"
          style={{ marginTop: hp(4) }}
          onPress={() => Actions.security()}
        />
        <SettingsToggle
          icon={<Biometrics />}
          title="Biometrics"
          toggle
          toggled={this.state.biometrics}
          toggleChange={() =>
            this.handleChange('biometrics', !this.state.biometrics)
          }
        />
        <SettingsItem icon={<Support />} title="Chat & Support" last />
      </>
    );

    const baseContent = (
      <>
        <SettingsToggle
          icon={<Notification />}
          title="In-App Notification"
          style={{ marginTop: hp(4) }}
          toggle
          toggled={this.state.notifications}
          toggleChange={() => this.handleNotificationToggle()}
        />
        <SettingsItem icon={<Privacy />} title="Privacy" />
        <SettingsItem
          icon={<Terms />}
          title="Terms & Conditions"
          onPress={() => Actions.terms()}
          last
        />
        <SettingsItem icon={<Logout />} title="Log Out" last logout />
      </>
    );
    const InAppView = () => (
      <View style={styles.inAppView}>
        <ParagraphText
          title="Turn on In-App notifications"
          style={styles.notificationHeader}
        />
        <Divider style={styles.notificationDivider} />
        <RegularText
          title="Are you sure you want to activate in-app notification?"
          style={styles.subText}
        />
        <View style={styles.buttonRow}>
          <Button
            title="No, keep off"
            light
            style={styles.button}
            onPress={() => this.closeNotificationToggle()}
          />
          <Button
            title="Yes, turn on"
            style={styles.button}
            onPress={() => this.activateNotificationToggle()}
          />
        </View>
      </View>
    );

    return (
      <View style={styles.background}>
        <BottomSheet
          openRef={this.openBottomSheet}
          height={hp(250)}
          render={<InAppView />}
        />
        <View style={styles.backIconRow}>
          <BackIcon />
          <Image source={profileLarge} style={styles.profileLarge} />
        </View>
        <HeaderText title="Firstname Lastname" style={styles.fullname} />
        <MainView
          style={[
            active === 'top' ? styles.mainView : styles.mainInactiveView,
            { marginTop: hp(40) },
          ]}>
          <TouchableOpacity
            style={styles.touchableView}
            onPress={() => this.setView('top')}>
            <HeaderText
              title="My Account"
              style={[styles.menuTitle, titleColor('top')]}
            />
          </TouchableOpacity>
          {this.mainContent}
          <MainView style={this.midSectionStyle()}>
            <TouchableOpacity
              style={styles.touchableView}
              onPress={() => this.setView('mid')}>
              <HeaderText
                title="Security & Support"
                style={[styles.menuTitle, titleColor('mid')]}
              />
            </TouchableOpacity>
            {midContent}
            <MainView
              style={
                active === 'base' ? styles.baseView : styles.baseInactiveView
              }>
              <TouchableOpacity
                style={styles.touchableView}
                onPress={() => this.setView('base')}>
                <HeaderText
                  title="Others"
                  style={[styles.menuTitle, titleColor('base')]}
                />
              </TouchableOpacity>
              {baseContent}
            </MainView>
          </MainView>
        </MainView>
      </View>
    );
  }
}
