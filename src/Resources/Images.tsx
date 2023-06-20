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
  // player: require('../Resources/Images/Player.png'),
};
export const darkImages = {
  ...lightImages,
};

export type imageType = typeof lightImages | typeof darkImages;
