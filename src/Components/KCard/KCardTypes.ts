import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KCardProps = WithChildren<{
  title?: string;
  onPress: () => void;
  addFavorite: () => void;
  txtStyle?: TextStyle;
  imgUrl?: any;
  percentage?: string;
}>;
