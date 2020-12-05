import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { kycInfo, mainLogo, profileImage } from '../../../assets/images';
import {
  AirtimeIcon,
  BellNotification,
  BillIcon,
  TransferIcon,
} from '../../../assets/svgs';
import {
  DarkBlue,
  Denim,
  ParagraphText,
  RegularText,
  White,
  wp,
} from '../../components';
import { AccountCard, Row } from '../../components/View';
import { accountData } from './data';
import { dashboardStyles as styles } from './styles';

export default class Dashboard extends Component {
  state = {
    activeSlide: 0,
  };

  Pagination = () => {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={2}
        activeDotIndex={activeSlide}
        containerStyle={styles.container}
        dotContainerStyle={styles.dotContainer}
        dotStyle={styles.dots}
        dotColor={White}
        inactiveDotColor={Denim}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  render() {
    const renderItem = ({ item }) => {
      return <AccountCard data={item} />;
    };
    return (
      <View style={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor={DarkBlue} />
        <View style={styles.leadRow}>
          <Image
            source={profileImage}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Image
            source={mainLogo}
            style={styles.mainLogo}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => Actions.notifications()}>
            <BellNotification />
          </TouchableOpacity>
        </View>
        <View style={styles.kycBanner}>
          <View style={styles.bannerRow}>
            <View>
              <RegularText
                title="You need to be able to complete your KYC to do more"
                style={styles.bannerLeadText}
              />
              <ParagraphText
                title=" Go to Documents & KYC"
                style={styles.bannerSubText}
              />
            </View>
            <Image
              source={kycInfo}
              style={styles.kycInfo}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.cardGrid}>
          <Carousel
            ref={(c) => {
              this.carousel = c;
            }}
            data={accountData}
            renderItem={renderItem}
            sliderWidth={wp(380)}
            itemWidth={wp(300)}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            slideStyle={styles.customItem}
            useScrollView
            layout="default"
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />
        </View>
        {this.Pagination()}
        <Row style={styles.dashboardButtonRow}>
          <TouchableOpacity style={styles.dashboardButton}>
            <BillIcon menu />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardButton}>
            <TransferIcon menu />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardButton}>
            <AirtimeIcon menu />
          </TouchableOpacity>
        </Row>
      </View>
    );
  }
}
