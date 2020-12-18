import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { DarkBlue, HeaderText, Input } from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { Button } from '../../../../components/Button';
import { MainView } from '../../../../components/View';
import { accountStyles as styles } from './styles';

const AddAccount = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Add Account" style={styles.leadText} />
      </View>
      <MainView style={styles.mainAccountView}>
        <KeyboardAwareScrollView>
          <Input
            label="Bank"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Account Number"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          {/* <Divider style={[styles.divider, { marginTop: hp(415) }]} /> */}
          <Button
            title="Add Account"
            style={styles.accountButton}
            // disabled={!email.length}
            onPress={() => Actions.account()}
          />
        </KeyboardAwareScrollView>
      </MainView>
    </View>
  );
};

export default AddAccount;
