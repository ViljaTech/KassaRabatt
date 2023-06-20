import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Settings'
>;

interface SettingsProp extends NavigationProp {}
const Settings: React.FC<SettingsProp> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
