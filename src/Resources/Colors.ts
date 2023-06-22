/**
 * lightColors are used for light theme
 * darkColors are used for dark theme
 * if no colours are provided for  dark theme it uses colors form light theme
 * make sure to name the colour in light and dark to same as shown for shadowColor to make the changes dynamic
 */
export const lightColors = {
  whiteColor: 'white',
  blackColor: '#000',
  appColor: '#FDA228',
  textColor: '#000000',
  deviderColor: '#E8E8E8',
  textGrayColor: '#808080',
  redColor: '#FF5C5C',
};
export const darkColors = {
  ...lightColors,
};

export type colorType = typeof lightColors | typeof darkColors;
