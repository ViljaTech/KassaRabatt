import {ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KErrorMessageProps = WithChildren<{
  messageText: string;
}>;
