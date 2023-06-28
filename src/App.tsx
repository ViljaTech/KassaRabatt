/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, SafeAreaView, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppProvider} from './Providers/AppConfig';
import {AppNavigationProvider} from './Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {enableLatestRenderer} from 'react-native-maps';

const App = () => {
  useEffect(() => {
    enableLatestRenderer();
    if (Platform.OS === 'android') {
      setTimeout(() => SplashScreen.hide(), 1000);
    }
  }, []);
  return (
    <AppProvider>
      <SafeAreaProvider>
        <AppNavigationProvider />
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
