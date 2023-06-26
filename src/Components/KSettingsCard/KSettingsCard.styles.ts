import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KSettingsCardProps} from './KSettingsTypes';

export const KSettingsCardStyles = (
  colors: colorType,
  props: KSettingsCardProps,
) => {
  return StyleSheet.create({
    containerStyle: {
      backgroundColor: colors.whiteColor,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 16,
      width: '100%',
      height: 56,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.deviderColor,
    },
    leftViewStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    leftImageIcon: {
      marginRight: 20,
    },
    textViewStyle: {
      flex: 1,
    },
    titleTextStyle: {
      ...Fonts.SFProDisplayMedium(17),
      color: colors.textColor,
      letterSpacing: 0.3,
      fontWeight: '500',
    },
    descTextStyle: {
      ...Fonts.SFProDisplayRegular(17),
      color: colors.textGrayColor,
      letterSpacing: 0.5,
      fontWeight: '400',
    },
    rightViewStyle: {
      width: 30,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
};
