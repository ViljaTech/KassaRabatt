import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PreRootStackParamList} from '../../Navigation/NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import {onBoardingStyles} from './OnBoarding.styles';
import {KButton} from '../../Components/KButton';

type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'OnBoarding'
>;

interface OnBoardingProp extends NavigationProp {}
const OnBoarding: React.FC<OnBoardingProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = onBoardingStyles(colors);
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.topViewStyle}>
        <Image source={images.onBoard} />
        <View style={styles.titleTextViewStyle}>
          <Text style={styles.titleTextStyle}>{strings.onBoardingTitle}</Text>
        </View>
        <View style={styles.descTextViewStyle}>
          <Text style={styles.descTextStyle}>{strings.onBoardingDesc}</Text>
        </View>
      </View>
      <View style={styles.btnViewStyle}>
        <KButton
          title="LET’S GO"
          onPress={() => navigation.navigate('Login')}
          btnViewStyle={styles.customBtnStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
