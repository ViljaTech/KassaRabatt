import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {settingsStyle} from './Settings.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KSettingsCard} from '../../Components/KSettingsCard';
import {settingsOptions} from '../../Resources/DammyData/DammyData';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Settings'
>;

interface SettingsProp extends NavigationProp {}
const Settings: React.FC<SettingsProp> = ({navigation}) => {
  const {colors, strings, images} = useAppData();
  const styles = settingsStyle(colors);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>{strings.settings}</Text>
      </View>
    );
  };

  const renderProfileSection = () => {
    return (
      <KSettingsCard
        title="Profile"
        description="vivek@viljetech.com"
        onPress={() => navigation.navigate('EditProfile')}
        customSettingsCardViewStyle={styles.cardViewStyle}
      />
    );
  };

  const renderOptionsSection = () => {
    return (
      <View style={styles.optionsSectionStyle}>
        {settingsOptions.map((option, index) => (
          <View key={index}>
            <KSettingsCard
              title={option.title}
              leftIcon={option.icon}
              onPress={() => console.log('ccc')}
            />
          </View>
        ))}
      </View>
    );
  };
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          {renderHeaderSection()}
          {renderProfileSection()}
          {renderOptionsSection()}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Settings;
