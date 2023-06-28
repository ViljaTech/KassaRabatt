import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useRef} from 'react';
import {PreLoginStackRoutes} from './Stack/PreLoginStack';
import {useAppData} from '../Providers/AppConfig';
export const AppNavigationProvider = () => {
  const navigationRef =
    useRef<NavigationContainerRef<ReactNavigation.RootParamList> | null>(null);
  const routeNameRef = useRef<string | undefined>(undefined);
  const {setCurrentRoute} = useAppData();

  return (
    <NavigationContainer
      ref={val => {
        navigationRef.current = val;
      }}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          setCurrentRoute(currentRouteName!);
        }
        routeNameRef.current = currentRouteName;
      }}>
      <PreLoginStackRoutes />
    </NavigationContainer>
  );
};
