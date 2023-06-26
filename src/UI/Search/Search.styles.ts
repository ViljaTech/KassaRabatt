import {Platform, StyleSheet} from 'react-native';
import {colorType} from '../../Resources/Colors';
import {Fonts} from '../../Resources/Fonts';

export const searchStyle = (colors: colorType) => {
  return StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingBottom: 20,
      flexGrow: 1,
    },
    headerSectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      backgroundColor: colors.appColor,
      paddingHorizontal: 16,
    },
    searchBarViewStyle: {
      flexDirection: 'row',
      backgroundColor: colors.whiteColor,
      height: 40,
      width: '100%',
      marginRight: 8,
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    searchBarTouchViewSTyle: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInputStyle: {
      // flex: 1,
      marginLeft: 4,
      height: Platform.OS === 'ios' ? '80%' : '100%',
      color: colors.textColor,
    },
    cancelTextStyle: {
      ...Fonts.SFProDisplayMedium(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      fontWeight: '500',
    },
    // category cards styles
    searchCategorysSectionStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: 5,
    },
    eachCategoryViewStyle: {
      width: '50%',
      height: 110,
      padding: 10,
    },
    eachCategorySubViewStyle: {
      flex: 1,
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
    },
    categoryTextStyle: {
      ...Fonts.NewYorkMediumBold(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      textAlign: 'center',
      fontWeight: '700',
    },
    categoryBransTextStyle: {
      ...Fonts.SFProDisplayRegular(14),
      color: colors.textColor,
      letterSpacing: 0.3,
      marginTop: 3,
      fontWeight: '400',
    },

    // search result cards style

    searchResultViewStyle: {
      marginHorizontal: 16,
    },
    searchResultCardViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 8,
      backgroundColor: colors.whiteColor,
      borderRadius: 8,
      width: '100%',
      marginTop: 16,
    },
    brandImgStyle: {
      width: 52,
      height: 52,
      marginRight: 16,
    },
    brandTextStyle: {
      ...Fonts.SFProDisplayMedium(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      width: '80%',
      fontWeight: '500',
    },
    emptyViewStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    noResultTextStyle: {
      ...Fonts.SFProDisplayRegular(17),
      color: colors.textColor,
      letterSpacing: 0.5,
      marginTop: 16,
      fontWeight: '400',
    },
  });
};
