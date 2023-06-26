import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KTextInputProps} from './KTextInputTypes';

export const KTextInputStyles = (colors: colorType, props: KTextInputProps) => {
  return StyleSheet.create({
    lableTextStyle: {
      color: colors.textGrayColor,
      ...Fonts.SFProDisplayMedium(14),
      fontWeight: '500',
    },
    textInputViewStyle: {
      flexDirection: 'row',
      height: 48,
      borderBottomWidth: props.inputValue ? 2 : 1,
      borderLeftWidth: 0,
      borderBottomColor: colors.blackColor,
      backgroundColor: colors.whiteColor,
      overflow: 'hidden',
      justifyContent: 'space-between',
    },
    textInputStyle: {
      flex: 1,
      paddingVertical: Platform.OS === 'ios' ? 12 : 8,
      color: colors.blackColor,
      ...Fonts.SFProDisplayMedium(17),
      letterSpacing: 0.5,
      fontWeight: '500',
    },
    secureViewStyle: {
      marginLeft: 10,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secureImageStyle: {
      width: 24,
      height: 24,
    },
  });
};
