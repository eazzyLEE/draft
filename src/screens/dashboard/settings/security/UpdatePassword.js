import React from 'react';
import { StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DarkBlue, HeaderText, Input } from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { Button } from '../../../../components/Button';
import { MainView } from '../../../../components/View';
import { updatePasswordStyles as styles } from './styles';

const UpdatePassword = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Update Password" style={styles.leadText} />
      </View>
      <MainView style={styles.mainView}>
        <Input label="Old Passwword" containerStyle={styles.topInput} />
        <Input label="New Passwword" containerStyle={styles.input} />
        <View style={styles.bottomContainer}>
          <Button
            title="Save & Continue"
            style={styles.button}
            // disabled={!email.length}
            onPress={() => Actions.pop()}
          />
        </View>
      </MainView>
    </View>
  );
};

export default UpdatePassword;
