import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const categoriesStyles = (colors: colorType) => {
  return StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
    },
    headerSectionStyle: {
      height: 40,
      backgroundColor: colors.appColor,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTextStyle: {
      ...Fonts.NewYorkMediumBold(24),
      color: colors.textColor,
      letterSpacing: 0.3,
      fontWeight: '700',
    },
    backArrowTouchViewStye: {
      position: 'absolute',
      left: 10,
      bottom: 0,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backArrowStyle: {
      width: 24,
      height: 24,
    },
    cardViewStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: 5,
    },
  });
};
