import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const onBoardingStyles = (colors: colorType) => {
  return StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    topViewStyle: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTextViewStyle: {
      paddingHorizontal: 20,
    },
    descTextViewStyle: {
      paddingHorizontal: 73,
    },
    titleTextStyle: {
      ...Fonts.SFProDisplayMedium(20),
      color: colors.textColor,
      letterSpacing: 0.5,
      textAlign: 'center',
      marginTop: 24,
    },
    descTextStyle: {
      ...Fonts.SFProDisplayRegular(17),
      color: colors.textGrayColor,
      letterSpacing: 0.5,
      textAlign: 'center',
      marginTop: 16,
    },
    btnViewStyle: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 24,
    },
    customBtnStyle: {
      width: '100%',
      backgroundColor: 'transparent',
      borderWidth: 1,
    },
  });
};
