import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PreRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KTextInput} from '../../Components/KTextInput';
import KErrorMessage from '../../Components/KErrorMessage';
import {KButton} from '../../Components/KButton';
import {signInWithBankStyles} from './SignInWithBank.styles';
type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'SignInWithBank'
>;

interface SignInWithBankProp extends NavigationProp {}
const SignInWithBank: React.FC<SignInWithBankProp> = ({navigation}) => {
  const styles = signInWithBankStyles();
  const {images, strings, colors} = useAppData();
  const [personal_number, setPersonal_number] = useState('');
  const [personal_numberErrorMsg, setPersonal_numberErrorMsg] = useState('');
  const renderTopDecoratedView = () => {
    return (
      <View style={styles.decoratedViewStyle}>
        <View style={styles.decoratedSubViewStyle}></View>
      </View>
    );
  };
  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>{strings.bankId}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.closeIconTouchViewStyle}>
          <Image source={images.closeIcon} style={styles.closeIconStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderInputSection = () => {
    return (
      <>
        <View style={styles.inputSectionViewStyle}>
          <KTextInput
            lable={personal_number.length > 0 ? strings.personalNumber : ''}
            placeholder={strings.personalNumber}
            inputValue={personal_number}
            inputOnChangeText={value => {
              setPersonal_number(value);
              setPersonal_numberErrorMsg('');
            }}
            keyboardType="default"
          />
          {personal_numberErrorMsg ? (
            <KErrorMessage messageText={personal_numberErrorMsg} />
          ) : null}
        </View>
      </>
    );
  };

  const renderBtnSection = () => {
    return (
      <View style={styles.btnSectionViewStyle}>
        <KButton title={strings.signIn} onPress={() => console.log('cc')} />
      </View>
    );
  };

  const renderDontHaveAccountSection = () => {
    return (
      <View style={styles.dontHaveAccountSecStyle}>
        <Text style={styles.dontHaveAccountTextStyle}>
          {strings.dontHaveAccount}{' '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signupViewStyle}>
          <Text style={styles.signupTxtStyle}>{strings.signIn}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.blackColor}
        barStyle="light-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.containerStyle}>
              {renderTopDecoratedView()}
              <View style={styles.subContainerStyle}>
                {renderHeaderSection()}
                <View style={styles.middleContainerStyle}>
                  {renderInputSection()}
                  {renderBtnSection()}
                </View>
                {renderDontHaveAccountSection()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default SignInWithBank;
