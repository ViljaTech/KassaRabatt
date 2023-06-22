import {KeyboardTypeOptions, ViewStyle} from 'react-native';

type WithChildren<T = {}> = T & {children?: React.ReactNode};

export type KTextInputProps = WithChildren<{
  placeholder: string;
  lable?: string;
  secureTextEntry?: boolean;
  passwordVisibility?: boolean;
  inputValue?: string;
  passwordVisibilityAction?: () => void;
  inputOnChangeText: (val: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  textEditable?: boolean;
  textInputStyle?: ViewStyle;
  textInputViewStyle?: ViewStyle;
  multiline?: boolean;
  numberOfLines?: number;
  autocompleteType?:
    | 'email'
    | 'off'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | undefined;
  textContentType?:
    | 'password'
    | 'nickname'
    | 'none'
    | 'name'
    | 'username'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | undefined;
}>;
