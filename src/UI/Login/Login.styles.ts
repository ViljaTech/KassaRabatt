import {StyleSheet} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Fonts} from '../../Resources/Fonts';

export const loginStyles = () => {
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
    contentContainerStyle: {
      backgroundColor: colors.whiteColor,
      paddingBottom: 50,
      position: 'relative',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    customKeyBoardAvoidViewStyle: {
      backgroundColor: colors.whiteColor,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
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
      fontWeight: '700',
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
    bankSectionViewStyle: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: colors.blackColor,
    },
    bankSigninTextStyle: {
      color: colors.blackColor,
      ...Fonts.SFProDisplayMedium(14),
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    deviderSectionViewStyle: {
      marginTop: 32,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    deviderStyle: {
      width: '42.5%',
      borderWidth: 1,
      borderColor: colors.deviderColor,
    },
    orTextStyle: {
      color: colors.textGrayColor,
      ...Fonts.SFProDisplayMedium(14),
      fontWeight: '500',
    },
    inputSectionViewStyle: {
      marginTop: 40,
    },
    forgotPasswordViewStyles: {
      width: '100%',
      height: 20,
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    forgotPasswordTouchViewStyles: {
      width: 150,
      height: 20,
      justifyContent: 'center',
    },
    forgotPasswordTextStyles: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.appColor,
      textDecorationLine: 'underline',
      textAlign: 'right',
      letterSpacing: 0.5,
      fontWeight: '400',
    },
    btnSectionViewStyle: {
      marginTop: 40,
    },
    dontHaveAccountSecStyle: {
      marginTop: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dontHaveAccountTextStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.blackColor,
      letterSpacing: 0.07,
      fontWeight: '400',
    },
    signInViewStyle: {},
    signInTxtStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.appColor,
      letterSpacing: 0.07,
      fontWeight: '400',
    },
  });
};
