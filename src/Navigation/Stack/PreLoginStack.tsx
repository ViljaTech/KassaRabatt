import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {PreRootStackParamList} from '../NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import SplashScreen from '../../UI/SplashScreen/SplashScreen';
import {TabBar} from './TabBar';
import Login from '../../UI/Login/Login';
import Signup from '../../UI/Signup/Signup';
import SignInWithBank from '../../UI/SignInWithBank/SignInWithBank';
import PasswordRecovery from '../../UI/PasswordRecovery/PasswordRecovery';
import CreateNewPassword from '../../UI/CreateNewPassword/CreateNewPassword';
import RabateDetails from '../../UI/RabateDetails/RabateDetails';
import Categories from '../../UI/Categories/Categories';
import EditProfile from '../../UI/EditProfile/EditProfile';
import Map from '../../UI/Map/Map';
import OnBoarding from '../../UI/OnBoarding/OnBoarding';

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
      <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={Signup} />
      <Stack.Screen name={'SignInWithBank'} component={SignInWithBank} />
      <Stack.Screen name={'PasswordRecovery'} component={PasswordRecovery} />
      <Stack.Screen name={'CreateNewPassword'} component={CreateNewPassword} />
      <Stack.Screen name={'RabateDetails'} component={RabateDetails} />
      <Stack.Screen name={'Categories'} component={Categories} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'Map'} component={Map} />
      <Stack.Screen
        name="TabBar"
        options={{gestureEnabled: false}}
        component={TabBar}
      />
    </Stack.Navigator>
  );
};
