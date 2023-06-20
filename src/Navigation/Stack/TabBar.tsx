import React from 'react';
import {Platform, View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarType} from '../NavigationTypes';
import {
  FavoriteStack,
  HomeStack,
  SearchStack,
  SettingsStack,
} from '../Stack/PostLoginStack';
import {useAppData} from '../../Providers/AppConfig';
import {StorageKeys} from '../../Storage';
// import { TourGuideZone, useTourGuideController } from 'rn-tourguide';
import {navigationStyles} from '../Navigation.styles';
import {isIphoneBig} from '../../Helper/iphoneHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import FastImage from 'react-native-fast-image';

const Tab = createBottomTabNavigator<TabBarType>();

export const TabBar = ({}) => {
  const {colors, strings, images} = useAppData();
  const styles = navigationStyles(colors);

  React.useEffect(() => {}, []); // 👈 don't miss it!

  const TabIcon = (props: any) => {
    return <View style={styles.tabIconStyle}>{props.children}</View>;
  };

  const TabIcon2 = (props: any) => {
    return <View>{props.children}</View>;
  };

  const bottomBarView = (focused: boolean) => {
    return (
      <View
        style={
          focused
            ? styles.focusedBottomBarStyle
            : styles.unFocusedBottomBarStyle
        }
      />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? (isIphoneBig() ? 90 : 70) : 70,
          backgroundColor: colors.whiteColor,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (focused: any) => {
            return (
              <TabIcon focused={focused}>
                <Text style={{color: focused.focused ? '#FDA228' : '#000000'}}>
                  Home
                </Text>
              </TabIcon>
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteStack}
        options={{
          tabBarIcon: (focused: any) => {
            return (
              <TabIcon focused={focused}>
                <Text style={{color: focused.focused ? '#FDA228' : '#000000'}}>
                  Favorite
                </Text>
              </TabIcon>
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{
          tabBarIcon: (focused: any) => {
            return (
              <TabIcon focused={focused}>
                <Text style={{color: focused.focused ? '#FDA228' : '#000000'}}>
                  Search
                </Text>
              </TabIcon>
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          tabBarIcon: (focused: any) => (
            <TabIcon focused={focused}>
              <Text style={{color: focused.focused ? '#FDA228' : '#000000'}}>
                Settings
              </Text>
            </TabIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
