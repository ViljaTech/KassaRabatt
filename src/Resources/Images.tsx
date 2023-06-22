/* eslint-disable react-native/no-inline-styles */
/**
 * lightImages are used for light theme
 * darkImages are used for dark theme
 * if no images are provided for  dark theme it uses images form light theme
 * make sure to name the images in light and dark to make the changes dynamic this is similar to colors
 * I have used FastImage since it has better performance then regular images from react-native
 */

export const lightImages = {
  logo: require('../Resources/Images/logo.png'),
  closeIcon: require('../Resources/Images/closeIcon.png'),
  eye_open: require('../Resources/Images/eye_open.png'),
  eye_close: require('../Resources/Images/eye_close.png'),
  errorIcon: require('../Resources/Images/errorIcon.png'),
  passwordRecovery: require('../Resources/Images/passwordRecovery.png'),
  mapIcon: require('../Resources/Images/mapIcon.png'),
  coverImage: require('../Resources/Images/coverImage.png'),
  coverImage2: require('../Resources/Images/coverImage2.png'),
  companyLogo: require('../Resources/Images/companyLogo.png'),
  retryPlaceholder: require('../Resources/Images/retryPlaceholder.png'),
  cpyLogo: require('../Resources/Images/cpyLogo.png'),
  dc: require('../Resources/Images/companyLogos/dc.png'),
  lons: require('../Resources/Images/companyLogos/lons.png'),
  m: require('../Resources/Images/companyLogos/m.png'),
  nordic: require('../Resources/Images/companyLogos/nordic.png'),
  rusta: require('../Resources/Images/companyLogos/rusta.png'),
  telia: require('../Resources/Images/companyLogos/telia.png'),
};
export const darkImages = {
  ...lightImages,
};

export type imageType = typeof lightImages | typeof darkImages;
