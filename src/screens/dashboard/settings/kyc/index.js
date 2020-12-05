import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Badge, Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { ListRightChevrolet } from '../../../../../assets/svgs';
import {
  AppleGreen,
  BurntSienna,
  DarkBlue,
  Eucalyptus,
  FairPink,
  HeaderText,
  hp,
  Orange,
  Serenade,
} from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { MainView } from '../../../../components/View';
import { kycStyles as styles } from '../styles';

const KycView = ({ badgeTitle, title, last, style, noBadge, onPress }) => {
  const pending = [Orange, Serenade];
  const rejected = [BurntSienna, FairPink];
  const standard = [Eucalyptus, AppleGreen];

  const status = () => {
    if (badgeTitle === 'Pending') return pending;
    if (badgeTitle === 'Rejected') return rejected;
    return standard;
  };

  return (
    <>
      <TouchableOpacity style={[styles.settingsRow, style]} onPress={onPress}>
        <HeaderText title={title} style={styles.settingsTitle} />
        {!noBadge ? (
          <Badge
            value={badgeTitle}
            badgeStyle={[styles.badge, { backgroundColor: status()[1] }]}
            textStyle={{ color: status()[0] }}
          />
        ) : null}
        <View style={styles.rightItem}>
          <ListRightChevrolet />
        </View>
      </TouchableOpacity>
      {!last ? <Divider style={styles.settingsDivider} /> : null}
    </>
  );
};

const Kyc = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Document and KYC" style={styles.leadText} />
      </View>
      <MainView style={styles.mainAccountView}>
        <KycView
          title="Passport"
          badgeTitle="Approved"
          style={{ marginTop: hp(36) }}
          onPress={() => Actions.upload({ file: 'passport' })}
        />
        <KycView
          title="Valid ID"
          badgeTitle="Pending"
          onPress={() => Actions.upload({ file: 'valid ID' })}
        />
        <KycView
          title="Utility Bill"
          badgeTitle="Rejected"
          onPress={() => Actions.upload({ file: 'utility bill' })}
        />
        <KycView title="Signature" noBadge last />
      </MainView>
    </View>
  );
};

export default Kyc;
