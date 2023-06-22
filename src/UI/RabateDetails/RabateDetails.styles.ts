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
      height: 70,
      backgroundColor: colors.appColor,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    headerTextStyle: {
      ...Fonts.NewYorkMediumBold(17),
      color: colors.textColor,
      letterSpacing: 0.3,
      top: 3,
    },
    mapTouchViewStyle: {
      position: 'absolute',
      left: 10,
      top: 3,
      width: 60,
      height: 40,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    middleSectionStyle: {
      position: 'relative',
      flex: 1,
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
      top: '25%',
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
    },
    percentageTextStyle: {
      ...percentageTextStyle,
      ...Fonts.SFProDisplayMedium(20),
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
    },
    offersSectionStyle: {
      paddingHorizontal: 16,
      marginTop: 8,
    },
    percentageTextStyle2: {
      ...percentageTextStyle,
      ...Fonts.SFProDisplayMedium(24),
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
