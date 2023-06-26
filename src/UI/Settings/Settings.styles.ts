import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const settingsStyle = (colors: colorType) => {
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
    cardViewStyle: {
      height: 80,
      marginTop: 16,
    },
    optionsSectionStyle: {
      marginTop: 32,
    },
  });
};
