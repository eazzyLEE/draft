import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import BottomOverlay from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP as hdp } from 'react-native-responsive-screen';
import { hp } from './utils';

export const BottomSheet = ({
  height,
  openRef,
  render,
  onClose,
  onOpen,
  noScroll,
  dragFromTop,
}) => {
  const heightCheck = () => (hdp('100%') < 675 ? height + hp(10) : height);
  return (
    <SafeAreaView>
      <BottomOverlay
        ref={openRef}
        height={heightCheck()}
        duration={300}
        closeOnDragDown
        animationType="fade"
        customStyles={{
          container: styles.container,
        }}
        onClose={onClose}
        onOpen={onOpen}
        dragFromTopOnly={dragFromTop}>
        {noScroll ? (
          <View style={styles.scrollContainer}>{render}</View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollContainer}>{render}</View>
          </ScrollView>
        )}
      </BottomOverlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: hp(25),
  },
});
