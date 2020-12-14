import React from 'react';
import { StatusBar, View } from 'react-native';
import { DarkBlue, HeaderText, ParagraphText } from '../../../../components';
import BackIcon from '../../../../components/BackIcon';
import { MainView } from '../../../../components/View';
import { termsStyles as styles } from '../security/styles';

const Terms = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
      <View style={styles.backIconRow}>
        <BackIcon />
        <HeaderText title="Terms & Conditions" style={styles.leadText} />
      </View>
      <MainView style={styles.mainView}>
        <ParagraphText
          title="Proident ea exercitation incididunt anim est ex tempor do ullamco dolor occaecat. Dolor ea aute non exercitation occaecat aliqua ad dolor enim. Occaecat magna nisi voluptate laborum proident proident veniam id fugiat pariatur dolore. Dolore non voluptate et nostrud adipisicing velit sunt commodo elit non tempor ipsum culpa amet. Qui amet deserunt commodo eiusmod fugiat adipisicing sit deserunt incididunt nostrud cillum fugiat reprehenderit ad.
Sit commodo nostrud aliquip do enim reprehenderit cupidatat occaecat in. Eiusmod velit dolor sint tempor aliqua duis aliqua laboris. Et occaecat sint aliquip quis sit quis cillum. Ad duis voluptate sint sunt quis laboris do reprehenderit elit. Reprehenderit amet ipsum aliquip sit culpa deserunt cillum adipisicing sunt. Magna magna tempor excepteur est veniam duis.
Ut est esse dolore do ex et eu labore adipisicing reprehenderit sit occaecat officia ex. Ut reprehenderit est proident amet labore proident et pariatur nulla. Laboris dolor amet non aliquip sint commodo culpa. Anim duis eiusmod proident"
          style={styles.termsText}
        />
      </MainView>
    </View>
  );
};

export default Terms;
