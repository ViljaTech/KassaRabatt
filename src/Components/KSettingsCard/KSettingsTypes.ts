import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KSettingsCardProps = WithChildren<{
  title: string;
  description?: string;
  onPress: () => void;
  txtStyle?: TextStyle;
  customSettingsCardViewStyle?: ViewStyle;
  leftIcon?: any;
}>;
