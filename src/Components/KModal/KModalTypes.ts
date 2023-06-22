import {TextStyle, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KModalProps = WithChildren<{
  is_Visible: boolean;
  modalContainer?: ViewStyle;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  backdropOpacity?: number;
  animationIn?:
    | 'slideInUp'
    | 'zoomIn'
    | 'zoomOut'
    | 'flash'
    | 'jello'
    | 'pulse'
    | 'rotate'
    | 'rubberBand'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInUp'
    | undefined;
  animationOut?:
    | 'slideOutDown'
    | 'zoomIn'
    | 'zoomOut'
    | 'flash'
    | 'jello'
    | 'pulse'
    | 'rotate'
    | 'rubberBand'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInUp'
    | undefined;
}>;
