import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';
import {colorType} from '../../Resources/Colors';
import {KModalProps} from './KModalTypes';

export const KModalStyles = (colors: colorType, props: KModalProps) => {
  return StyleSheet.create({
    modalContainerStyle: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    subContainerStyle: {
      backgroundColor: 'white',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    lineStyle: {
      marginTop: 12,
      width: 35,
      height: 4,
      backgroundColor: colors.textGrayColor,
      alignSelf: 'center',
      borderRadius: 2,
    },
  });
};
