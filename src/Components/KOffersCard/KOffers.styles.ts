import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KOffersCardProps} from './KOfforsTypes';

export const KOffersCardStyles = (
  colors: colorType,
  props: KOffersCardProps,
) => {
  return StyleSheet.create({
    containerStyle: {
      width: '100%',
      padding: 16,
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
      marginTop: 16,
    },
    topViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    percentageTextStyle: {
      color: colors.redColor,
      letterSpacing: 0.5,
      ...Fonts.SFProDisplayMedium(24),
      fontWeight: '500',
    },
    topSubViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      //   justifyContent: 'center',
    },
    qrIconStyle: {
      marginRight: 16,
    },
    showCodeBtnStyle: {
      paddingHorizontal: 16,
      paddingVertical: 7,
      marginTop: 12,
      backgroundColor: colors.appColor,
    },
    showCodeBtnTextStyle: {
      ...Fonts.SFProDisplayMedium(12),
      letterSpacing: 1,
      color: colors.textColor,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    descTextStyle: {
      ...Fonts.NewYorkMediumSemiBold(15),
      color: colors.textColor,
      letterSpacing: 0.3,
      lineHeight: 20,
      marginTop: 12,
      fontWeight: '600',
    },
  });
};
