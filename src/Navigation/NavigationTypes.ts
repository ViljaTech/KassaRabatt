import {ParamListBase} from '@react-navigation/native';

type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: {screen: K; params?: T[K]};
}[keyof T];

export type PreRootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  TabBar: undefined;
  SignInWithBank: undefined;
  PasswordRecovery: undefined;
  CreateNewPassword: undefined;
  RabateDetails: {data: any};
  Categories: {data?: any};
  EditProfile: undefined;
};

export type PostRootStackParamList = {
  TabBar: SubNavigator<TabBarType>;
  Home: undefined;
  Favorite: undefined;
  Search: undefined;
  Settings: undefined;
  Login: undefined;
  CreateNewPassword: undefined;
  RabateDetails: {data: any};
  Categories: {data?: any};
  EditProfile: undefined;
};

export type TabBarType = {
  HomeTab: undefined;
  FavoriteTab: undefined;
  SearchTab: undefined;
  SettingsTab: undefined;
};
