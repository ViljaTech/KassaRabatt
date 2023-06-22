import {StyleSheet} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Fonts} from '../../Resources/Fonts';

export const passwordRecoveryStyles = () => {
  const {colors} = useAppData();
  return StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
      backgroundColor: colors.whiteColor,
    },
    containerStyle: {
      flex: 1,
      backgroundColor: colors.blackColor,
    },
    subContainerStyle: {
      flex: 1,
      backgroundColor: colors.whiteColor,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      position: 'relative',
    },
    decoratedViewStyle: {
      height: 10,
      backgroundColor: colors.blackColor,
    },
    decoratedSubViewStyle: {
      position: 'absolute',
      width: '85%',
      height: 20,
      backgroundColor: colors.whiteColor,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      alignSelf: 'center',
      opacity: 0.5,
    },
    headerSectionStyle: {
      backgroundColor: colors.appColor,
      height: 70,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    headerTextStyle: {
      color: colors.textColor,
      ...Fonts.NewYorkMediumBold(17),
      letterSpacing: 0.3,
    },
    closeIconTouchViewStyle: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeIconStyle: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    middleContainerStyle: {
      paddingHorizontal: 24,
    },
    msgSectionStyle: {
      marginTop: 8,
      alignItems: 'center',
    },
    msgTextStyle: {
      width: 185,
      marginTop: 16,
      color: colors.textColor,
      ...Fonts.SFProDisplayRegular(15),
      letterSpacing: 0.07,
      textAlign: 'center',
    },
    inputSectionViewStyle: {
      marginTop: 40,
    },
    btnSectionViewStyle: {
      marginTop: 46,
    },
    dontHaveAccountSecStyle: {
      position: 'absolute',
      bottom: 40,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    dontHaveAccountTextStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.blackColor,
      letterSpacing: 0.07,
    },
    signupViewStyle: {},
    signupTxtStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.appColor,
      letterSpacing: 0.07,
    },
  });
};
