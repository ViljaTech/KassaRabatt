import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KOffersCardProps = WithChildren<{
  description?: string;
  onPress: () => void;
  //   addFavorite: () => void;
  //   txtStyle?: TextStyle;
  //   imgUrl?: any;
  percentage?: string;
  index?: number;
}>;
