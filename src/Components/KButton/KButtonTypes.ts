import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KButtonProps = WithChildren<{
  title?: string;
  onPress: () => void;
  btnViewStyle?: ViewStyle;
  txtStyle?: TextStyle;
  disabled?: Boolean;
  imgUrl?: ImageSourcePropType;
}>;
