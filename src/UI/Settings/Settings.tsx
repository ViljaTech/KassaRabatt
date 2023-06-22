import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {settingsStyle} from './Settings.styles';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Settings'
>;

interface SettingsProp extends NavigationProp {}
const Settings: React.FC<SettingsProp> = ({navigation}) => {
  const {colors} = useAppData();
  const styles = settingsStyle();
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          <Text>Settings</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Settings;
