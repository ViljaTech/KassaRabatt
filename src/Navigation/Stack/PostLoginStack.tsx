import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {PostRootStackParamList} from '../NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import {StorageKeys} from '../../Storage';
import Home from '../../UI/Home/Home';
import Favorite from '../../UI/Favorite/Favorite';
import Search from '../../UI/Search/Search';
import Settings from '../../UI/Settings/Settings';

const HomeTab = createNativeStackNavigator<PostRootStackParamList>();

export const HomeStack = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <HomeTab.Screen
        name={'Home'}
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
    </HomeTab.Navigator>
  );
};

const FavoriteTab = createNativeStackNavigator<PostRootStackParamList>();
export const FavoriteStack = () => {
  return (
    <FavoriteTab.Navigator
      initialRouteName={'Favorite'}
      screenOptions={{headerShown: false}}>
      <FavoriteTab.Screen name={'Favorite'} component={Favorite} />
    </FavoriteTab.Navigator>
  );
};

const SearchTab = createNativeStackNavigator<PostRootStackParamList>();
export const SearchStack = () => {
  return (
    <SearchTab.Navigator
      initialRouteName={'Search'}
      screenOptions={{headerShown: false}}>
      <SearchTab.Screen name={'Search'} component={Search} />
    </SearchTab.Navigator>
  );
};

const SettingsTab = createNativeStackNavigator<PostRootStackParamList>();

export const SettingsStack = () => {
  return (
    <SettingsTab.Navigator
      initialRouteName={'Settings'}
      screenOptions={{headerShown: false}}>
      <SettingsTab.Screen name={'Settings'} component={Settings} />
    </SettingsTab.Navigator>
  );
};
