/**
 * lightColors are used for light theme
 * darkColors are used for dark theme
 * if no colours are provided for  dark theme it uses colors form light theme
 * make sure to name the colour in light and dark to same as shown for shadowColor to make the changes dynamic
 */
export const lightColors = {
  defaultBackgroundColor: 'white',
  appPrimaryColor: '#458CFF',
  appPrimaryColor1: '#3772FF',
  disableColor: 'rgba(69, 140, 255, 0.4)',
  transparent: 'transparent',
  whiteColor: 'white',
  blackColor: '#000',
  redColor: '#FF5C5C',
  tfPHColor: '#AFB3C1',
  tfColor: '#21242D',
  tsfColor: '#757C8E',
  tsfColor2: '#26273C',
  tfBorderColor: '#E4E6EA',
  inputLableColor: '#353945',
  SpinnerColor: 'blue',
  SpinnerBackgroud: 'rgba(0,0,0,0.3)',
  shadowColor: 'rgba(0,0,0,0.5)',
  fontColor: 'black',
  borderColor: 'black',
  gradientColor: ['#00fffc', '#0266a0'],
  placeHolderTextColor: 'red',
  vBgColor: '#E6E1E1',
  cOptionTextColor: '#333743',
  passworLengthTextColor: '#00D789',
  removeTextColor: '#FF5C5C',
  dividerColor: '#626262',
  lightDeviderColor: '#E6E8EC',
  orTextColor: '#343A3F',
  notInvitedTextColor: '#757C8E',
  inactiveTabColor: '#757C8E',
  lightPerpulColor: '#D3D5FE',
  lightGreenColor: '#DAFFD6',
  lightBlueColor: '#CFE5FC',
  lightPink: '#FFE4F1',
  kidInActive: '#F97070',
  questionsCountTextColor: '#666E7A',
  greenColor: '#28CA6C',
  unfilledPrgBarColor: '#D9D9D9',
  imgDimensionTextColor: '#777E91',
  giftcardLinearGradient: '#00000000',
  giftcardLinearGradient2: '#000000',
  paginationDotsActive: '#8E96FF',
  paginationDotsInActive: '#DA92FC',
};
export const darkColors = {
  ...lightColors,
  SpinnerColor: 'red',
  shadowColor: '#0266a0',
  gradientColor: ['#fe491d', '#f9f601'],
};

export type colorType = typeof lightColors | typeof darkColors;
