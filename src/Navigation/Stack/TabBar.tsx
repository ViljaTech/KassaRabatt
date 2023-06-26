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
import {
  FavoriteIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
} from '../../Resources/Svg/Svg';
// import FastImage from 'react-native-fast-image';

const Tab = createBottomTabNavigator<TabBarType>();

export const TabBar = ({}) => {
  const {colors, strings, images} = useAppData();
  const styles = navigationStyles(colors);

  React.useEffect(() => {}, []);

  const TabIcon = (props: any) => {
    return <View style={styles.tabIconStyle}>{props.children}</View>;
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? (isIphoneBig() ? 100 : 90) : 70,
          backgroundColor: colors.appColor,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: (focused: any) => {
            return (
              <TabIcon focused={focused}>
                <HomeIcon
                  fillColor={
                    focused.focused ? colors.whiteColor : colors.blackColor
                  }
                />
                <Text
                  style={[
                    styles.tabTextStyle,
                    {
                      color: focused.focused
                        ? colors.whiteColor
                        : colors.blackColor,
                    },
                  ]}>
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
                <FavoriteIcon
                  fillColor={
                    focused.focused ? colors.whiteColor : colors.blackColor
                  }
                />
                <Text
                  style={[
                    styles.tabTextStyle,
                    ,
                    {
                      color: focused.focused
                        ? colors.whiteColor
                        : colors.blackColor,
                    },
                  ]}>
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
                <SearchIcon
                  fillColor={
                    focused.focused ? colors.whiteColor : colors.blackColor
                  }
                />
                <Text
                  style={[
                    styles.tabTextStyle,
                    ,
                    {
                      color: focused.focused
                        ? colors.whiteColor
                        : colors.blackColor,
                    },
                  ]}>
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
              <SettingsIcon
                fillColor={
                  focused.focused ? colors.whiteColor : colors.blackColor
                }
              />
              <Text
                style={[
                  styles.tabTextStyle,
                  {
                    color: focused.focused
                      ? colors.whiteColor
                      : colors.blackColor,
                  },
                ]}>
                Settings
              </Text>
            </TabIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
