import React from 'react';
import { StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UpdatePassword, UpdatePin } from '../../../../../assets/svgs';
import { DarkBlue, HeaderText } from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { MainView, SettingsItem } from '../../../../components/View';
import { securityStyles as styles } from './styles';

const Security = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Security" style={styles.leadText} />
      </View>
      <MainView style={styles.mainView}>
        <SettingsItem
          icon={<UpdatePassword />}
          title="Update Password"
          onPress={() => Actions.update_password()}
        />
        <SettingsItem
          icon={<UpdatePin />}
          title="Update Pin"
          onPress={() => Actions.update_pin()}
          last
        />
      </MainView>
    </View>
  );
};

export default Security;
