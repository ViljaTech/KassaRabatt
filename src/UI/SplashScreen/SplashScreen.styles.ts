import {StyleSheet} from 'react-native';
import {Fonts} from '../../Resources/Fonts';

export const splashScreenStyles = () => {
  return StyleSheet.create({
    descTextStyle: {
      color: '#000000',
      marginTop: 24,
      ...Fonts.SFProDisplayMedium(15),
    },
  });
};
