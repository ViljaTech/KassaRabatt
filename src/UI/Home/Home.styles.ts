import {StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const homeStyle = (colors: colorType) => {
  return StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
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
    mapTouchViewStyle: {
      position: 'absolute',
      right: 10,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselViewStyle: {
      flex: 1,
      justifyContent: 'center',
    },
    carouselStyle: {
      height: 225,
      width: '100%',
      borderRadius: 24,
      position: 'relative',
      marginTop: 16,
    },
    coverImgStyle: {
      width: '100%',
      borderRadius: 24,
      resizeMode: 'stretch',
    },
    coverImgDetailsViewStyle: {
      position: 'absolute',
      bottom: 24,
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    coverImgDetailsSubViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    companyLogoStyle: {
      width: 52,
      height: 52,
      borderRadius: 8,
      resizeMode: 'contain',
    },
    companyDetailsStyle: {
      marginLeft: 16,
    },
    companyNameTextStyle: {
      ...Fonts.SFProDisplayMedium(17),
      color: colors.whiteColor,
      letterSpacing: 0.5,
      fontWeight: '500',
    },
    companyDescTextStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.whiteColor,
      letterSpacing: 0.07,
      marginTop: 5,
      fontWeight: '400',
    },
    percentageTextStyle: {
      ...Fonts.SFProDisplayBold(24),
      color: colors.whiteColor,
      fontWeight: '700',
    },
    paginationSecttionStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    paginationDotStyle: {
      width: 12,
      height: 12,
      borderRadius: 12,
      marginHorizontal: -5,
      backgroundColor: colors.appColor,
    },
    optionsSectionsStyle: {
      paddingHorizontal: 16,
      height: 40,
    },
    optionsTouchViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 17,
      height: 30,
    },
    optionTextStyle: {
      color: colors.textColor,
      ...Fonts.SFProDisplayBold(11),
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    btnViewStyle: {
      width: 74,
      marginTop: 16,
    },
    cardSectionStyle: {
      marginTop: 8,
    },
    emptyViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardViewStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: 5,
    },

    scrollView: {
      backgroundColor: colors.textGrayColor,
    },
  });
};
