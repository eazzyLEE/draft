import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { profileLarge } from '../../../../assets/images';
import { DarkBlue, HeaderText, Input } from '../../../components';
import BackIcon from '../../../components/BackIcon';
import { Button } from '../../../components/Button';
import { Image, MainView } from '../../../components/View';
import { profileStyles as styles } from './styles';

const Profile = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Profile" style={styles.leadText} />
      </View>
      <MainView style={styles.mainAccountView}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ alignItems: 'center' }}>
          <Image source={profileLarge} style={styles.profileLarge} />
          <HeaderText title="Edit Profile Picture" style={styles.editText} />

          <Input
            label="Mobile Number"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Date of birth"
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
            label="BVN"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />

          <Input
            label="Gender"
            value={email}
            onChange={(value) => setEmail(value)}
            containerStyle={styles.input}
            keyboardType="email-address"
          />
        </KeyboardAwareScrollView>
        <View style={styles.bottomContainer}>
          <Button
            title="Save & Continue"
            style={styles.button}
            // disabled={!email.length}
            onPress={() => Actions.dashboard({ type: 'reset' })}
          />
        </View>
      </MainView>
    </View>
  );
};

export default Profile;
