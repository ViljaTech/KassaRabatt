import {ParamListBase} from '@react-navigation/native';

type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: {screen: K; params?: T[K]};
}[keyof T];

export type PreRootStackParamList = {
  SplashScreen: undefined;
  TabBar: undefined;
};

export type PostRootStackParamList = {
  TabBar: SubNavigator<TabBarType>;
  Home: undefined;
  Favorite: undefined;
  Search: undefined;
  Settings: undefined;
};

export type TabBarType = {
  HomeTab: undefined;
  FavoriteTab: undefined;
  SearchTab: undefined;
  SettingsTab: undefined;
};
