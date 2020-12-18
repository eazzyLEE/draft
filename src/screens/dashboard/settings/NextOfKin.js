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
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.background}>
      {/* <KeyboardAwareScrollView> */}
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Next of Kin" style={styles.leadText} />
      </View>
      <MainView style={styles.mainAccountView}>
        <KeyboardAwareScrollView>
          {/* style={{ flex: 1 }}
          contentContainerStyle={{ height: '80%', marginBottom: hp(20) }}> */}
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
            label="Phone Number"
            value={phone}
            onChange={(value) => setPhone(value)}
            containerStyle={styles.input}
            keyboardType="number-pad"
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
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default NextOfKin;
