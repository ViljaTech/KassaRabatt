import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KFavoriteCardProps = WithChildren<{
  title: string;
  description?: string;
  percentage?: string;
  onPress: () => void;
  txtStyle?: TextStyle;
  imgUrl?: any;
}>;
