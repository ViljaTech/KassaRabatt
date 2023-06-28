import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const mapStyles = (colors: colorType) => {
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
    backBtnTouchViewStyle: {
      position: 'absolute',
      left: 10,
      bottom: 0,
      width: 60,
      height: 40,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    backArrowStyle: {
      width: 24,
      height: 24,
    },
    emptyViewStyle: {
      flex: 0.8,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyViewTextStyle: {
      ...Fonts.Poppins(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      marginTop: 16,
      fontWeight: '400',
    },
    map: {
      width: '100%',
      height: '100%',
    },
    btnViewStyle: {
      marginTop: 27,
      paddingHorizontal: 17,
      paddingVertical: 7,
    },
  });
};
