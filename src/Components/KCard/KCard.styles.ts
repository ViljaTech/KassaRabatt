import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KCardProps} from './KCardTypes';

export const KCardStyles = (colors: colorType, props: KCardProps) => {
  return StyleSheet.create({
    containerStyle: {
      width: '50%',
      height: 219,
      padding: 10,
      marginVertical: 8,
    },
    subContainerStyle: {
      flex: 1,
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
    },
    cardTopViewStyle: {
      width: '100%',
      height: 163,
    },
    cardBottomViewStyle: {
      width: '100%',
      height: 56,
      backgroundColor: colors.appColor,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 8,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circlesViewStyle: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: -6,
      left: 4,
      right: 4,
      overflow: 'hidden',
    },
    circleStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: colors.deviderColor,
      margin: 2.2,
    },
    favoriteIconViewStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 8,
      marginHorizontal: 10,
    },
    favoriteIconTouchViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
    },
    companyLogoViewStyle: {
      width: '100%',
      height: 80,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    companyLogoStyle: {
      width: '100%',
      // height: 90,
    },
    titleViewStyle: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTextStyle: {
      color: colors.textColor,
      ...Fonts.NewYorkMediumRegular(15),
      letterSpacing: 0.07,
      marginTop: 6,
    },
    cardBottomTextStyle: {
      color: colors.textColor,
      ...Fonts.SFProDisplayRegular(14),
      letterSpacing: 0.07,
      marginRight: 6,
    },
    percentageTextStyle: {
      color: colors.textColor,
      ...Fonts.SFProDisplayBold(18),
      letterSpacing: 0.5,
    },
  });
};
