import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KErrorMessageProps} from './KErrorMessageTypes';

export const KErrorMessageStyles = (
  colors: colorType,
  props: KErrorMessageProps,
) => {
  return StyleSheet.create({
    mainViewStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 10,
    },
    messasgeTextStyle: {
      ...Fonts.SFProDisplayMedium(13),
      color: colors.redColor,
      marginLeft: 5,
      alignItems: 'baseline',
    },
  });
};
