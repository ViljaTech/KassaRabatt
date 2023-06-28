import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const favoriteStyle = (colors: colorType) => {
  return StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
    },
    contentContainerStyle: {
      // flex: 1,
      paddingBottom: 5,
      paddingHorizontal: 16,
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
    emptyViewStyle: {
      // width: '100%',
      // height: '100%',
      flex: 0.8,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyViewTextStyle: {
      ...Fonts.SFProDisplayRegular(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      marginTop: 16,
      fontWeight: '400',
    },
  });
};
