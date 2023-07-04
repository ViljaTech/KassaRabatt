import {Platform, StyleSheet} from 'react-native';
import {isIphoneBig} from '../../Helper/iphoneHelper';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const rabateDetailsStyle = (colors: colorType) => {
  const percentageTextStyle = {
    color: colors.redColor,
    letterSpacing: 0.5,
  };
  return StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingBottom: 20,
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
      top: 6,
      width: 60,
      height: 40,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    backArrowStyle: {
      width: 24,
      height: 24,
    },
    middleSectionStyle: {
      position: 'relative',
      flex: 1,
    },
    companyLogoContainerStyle: {
      height: 100,
      backgroundColor: colors.appColor,
      position: 'relative',
    },
    companyLogoViewStyle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      shadowOffset: {width: 2, height: 4},
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    companyLogoSubViewStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      height: 90,
      top: '60%',
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
    },
    companyLogoStyle: {
      width: 90,
      height: 90,
      borderRadius: 8,
    },
    companyDetaisSectionStyle: {
      marginTop: 61,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    titleTextStyle: {
      color: colors.textColor,
      ...Fonts.SFProDisplayRegular(17),
      letterSpacing: 0.5,
      fontWeight: '400',
    },
    descTextViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 12,
    },
    companyDescTextStyle: {
      color: colors.textColor,
      ...Fonts.SFProDisplayMedium(20),
      letterSpacing: 0.5,
      fontWeight: '500',
    },
    percentageTextStyle: {
      ...percentageTextStyle,
      ...Fonts.SFProDisplayMedium(20),
      fontWeight: '500',
    },
    btnViewStyle: {
      paddingHorizontal: 16,
      paddingVertical: 7,
      marginTop: 12,
      backgroundColor: colors.blackColor,
    },
    btnTextStyle: {
      ...Fonts.SFProDisplayMedium(12),
      letterSpacing: 1,
      color: colors.whiteColor,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    offersSectionStyle: {
      paddingHorizontal: 16,
      marginTop: 8,
    },
    percentageTextStyle2: {
      ...percentageTextStyle,
      ...Fonts.SFProDisplayMedium(24),
      fontWeight: '500',
    },
    bottomModalViewStyle: {
      padding: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalTextDescStyle: {
      color: colors.textGrayColor,
      ...Fonts.SFProDisplayRegular(15),
      letterSpacing: 0.07,
      marginTop: 8,
      fontWeight: '400',
    },
    bigQrCodeStyle: {
      width: 196,
      height: 196,
      marginTop: 16,
    },
    doneBtnStyle: {
      width: '100%',
      marginTop: 30,
      marginBottom: Platform.OS === 'ios' ? 15 : 0,
    },
  });
};
