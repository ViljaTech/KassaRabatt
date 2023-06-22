import {Platform, StyleSheet} from 'react-native';
import {isIphoneBig} from '../Helper/iphoneHelper';
import {colorType} from '../Resources/Colors';
import {Fonts} from '../Resources/Fonts';

export const navigationStyles = (colors: colorType) => {
  return StyleSheet.create({
    tabIconStyle: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabIcon2Style: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      // bottom: Platform.OS === 'ios' ? (isIphoneBig() ? 30 : 35) : 35,
      top: -25,
    },
    tabTextStyle: {
      ...Fonts.SFProDisplayRegular(10),
      letterSpacing: 0.07,
      marginTop: 3,
    },
    circularTabViewStyle: {
      width: 74,
      height: 74,
      backgroundColor: 'white',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOpacity: 0.24,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      elevation: 6,
    },
    circularTabSubViewStyle: {
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: colors.appColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    focusedBottomBarStyle: {
      borderTopWidth: 8,
      width: '100%',
      top: '35%',
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      borderColor: colors.appColor,
    },
    unFocusedBottomBarStyle: {
      borderTopWidth: 8,
      width: '100%',
      top: '35%',
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      borderColor: colors.whiteColor,
    },
    plusImgStyle: {
      width: 30,
      height: 30,
    },
  });
};
