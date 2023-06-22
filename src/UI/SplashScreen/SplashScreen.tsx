import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  PostRootStackParamList,
  PreRootStackParamList,
} from '../../Navigation/NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import {splashScreenStyles} from './SplashScreen.styles';
import CustomStatusBar from '../../Components/CustomStatusBar';
type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'SplashScreen'
>;

interface SplashScreenProp extends NavigationProp {}
const SplashScreen: React.FC<SplashScreenProp> = ({navigation}) => {
  const {images} = useAppData();
  const styles = splashScreenStyles();
  return (
    <>
      <CustomStatusBar backgroundColor="#FDA228" barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDA228',
        }}>
        <Image source={images.logo} />
        <Text style={styles.descTextStyle}>Discounts for everyday life</Text>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
