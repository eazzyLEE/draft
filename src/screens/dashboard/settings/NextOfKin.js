import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { DarkBlue, HeaderText, hp, Input } from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { Button } from '../../../components/Button';
import { MainView } from '../../../components/View';
import { nextOfKinStyles as styles } from './styles';

const NextOfKin = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Next of Kin" style={styles.leadText} />
      </View>
      <MainView style={styles.mainAccountView}>
        <KeyboardAwareScrollView>
          <Input
            label="First Name"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={[styles.input, { marginTop: hp(32) }]}
            keyboardType="email-address"
          />

          <Input
            label="Last Name"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Email Address"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Address"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="City"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="State"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Country"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Relationship"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />
        </KeyboardAwareScrollView>
        <View style={styles.bottomContainer}>
          <Button
            title="Add Account"
            style={styles.button}
            // disabled={!email.length}
            onPress={() => Actions.dashboard({ type: 'reset' })}
          />
        </View>
      </MainView>
    </View>
  );
};

export default NextOfKin;
