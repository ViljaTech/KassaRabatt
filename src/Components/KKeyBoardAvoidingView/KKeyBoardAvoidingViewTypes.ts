import {ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KKeyBoardAvoidingProps = WithChildren<{
  customAvoidKeyboardViewStyle?: ViewStyle;
}>;
