import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {PreRootStackParamList} from '../NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import SplashScreen from '../../UI/SplashScreen/SplashScreen';
import {TabBar} from './TabBar';

const Stack = createNativeStackNavigator<PreRootStackParamList>();

export const PreLoginStackRoutes = () => {
  const {strings} = useAppData();
  const style = {
    borderRadius: 20,
    paddingTop: 5,
  };
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen
        name="TabBar"
        options={{gestureEnabled: false}}
        component={TabBar}
      />
    </Stack.Navigator>
  );
};
