import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { profileLarge } from '../../../../assets/images';
import {
  Account,
  Document,
  Profile,
  ProfileGroup,
} from '../../../../assets/svgs';
import {
  HawkesBlue,
  HeaderText,
  hp,
  LinkWater,
  White,
} from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { Image, MainView, SettingsItem } from '../../../components/View';
import { settingStyles as styles } from './styles';

export default class Settings extends Component {
  state = {
    active: 'top',
    top: [White, HawkesBlue, LinkWater],
    mid: [HawkesBlue, White, LinkWater],
    base: [HawkesBlue, LinkWater, White],
  };

  setView = (section) => this.setState({ active: section });

  midSectionStyle = () => {
    if (this.state.active === 'mid')
      return [styles.midView, { backgroundColor: this.state.mid[1] }];
    if (this.state.active === 'base')
      return [
        styles.midInactiveView,
        { height: hp(467), backgroundColor: this.state.base[1] },
      ];
    return [styles.midInactiveView, { backgroundColor: this.state.top[1] }];
  };

  mainContent = (
    <>
      <SettingsItem
        icon={<Account />}
        title="Account Management"
        style={{ marginTop: hp(4) }}
      />
      <SettingsItem icon={<ProfileGroup />} title="Next of Kin" />
      <SettingsItem icon={<Profile />} title="Edit Profile" />
      <SettingsItem icon={<Document />} title="Document & KYC" last progress />
    </>
  );

  render() {
    const { active } = this.state;
    const titleColor = (section) =>
      active !== section ? styles.disabledTitle : {};
    return (
      <View style={styles.background}>
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
            <MainView
              style={
                active === 'base' ? styles.baseView : styles.baseInactiveView
              }>
              <TouchableOpacity
                style={styles.touchableView}
                onPress={() => this.setView('base')}>
                <HeaderText
                  title="others"
                  style={[styles.menuTitle, titleColor('base')]}
                />
              </TouchableOpacity>
            </MainView>
          </MainView>
        </MainView>
      </View>
    );
  }
}
