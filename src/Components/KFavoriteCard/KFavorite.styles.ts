import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KFavoriteCardProps} from './KFavoriteTypes';

export const KFavoriteCardStyles = (
  colors: colorType,
  props: KFavoriteCardProps,
) => {
  return StyleSheet.create({
    containerStyle: {
      width: '100%',
      height: 90,
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
      marginTop: 16,
    },
    subContainerStyle: {
      flexDirection: 'row',
      width: '100%',
    },
    leftViewStyle: {
      width: '24%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftImgStyle: {
      width: '60%',
      height: 70,
    },
    separatorViewStyle: {
      //   width: '4%',
      marginRight: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightViewStyle: {
      width: '58%',
      justifyContent: 'center',
      position: 'relative',
      //   backgroundColor: 'red',
    },
    titleTextStyle: {
      ...Fonts.SFProDisplayMedium(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      flexWrap: 'wrap',
      fontWeight: '500',
    },
    descTextViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6,
    },
    descTextStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.textColor,
      letterSpacing: 0.3,
      fontWeight: '400',
    },
    percentageTextStyle: {
      ...Fonts.SFProDisplayBold(18),
      color: colors.textColor,
      letterSpacing: 0.5,
      fontWeight: '700',
    },
    favoriteBtnStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      position: 'absolute',
      // right: 0,
      top: 5,
      right: 5,
    },
  });
};
