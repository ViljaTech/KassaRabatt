import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KButtonProps} from './KButtonTypes';

export const KButtonStyles = (colors: colorType, props: KButtonProps) => {
  return StyleSheet.create({
    btnViewStyle: {
      height: 50,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.disabled ? colors.textGrayColor : colors.appColor,
    },
    btnTxtStyle: {
      ...Fonts.SFProDisplayMedium(14),
      color: colors.blackColor,
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    imgStyles: {
      resizeMode: 'contain',
      width: 18,
      height: 18,
      marginRight: 8,
    },
  });
};
