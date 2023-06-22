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
import {passwordRecoveryStyles} from './PasswordRecovary.styles';
type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'PasswordRecovery'
>;

interface PasswordRecoveryProp extends NavigationProp {}
const PasswordRecovery: React.FC<PasswordRecoveryProp> = ({navigation}) => {
  const styles = passwordRecoveryStyles();
  const {images, strings, colors} = useAppData();
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
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
        <Text style={styles.headerTextStyle}>{strings.passwordRecovery}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.closeIconTouchViewStyle}>
          <Image source={images.closeIcon} style={styles.closeIconStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMsgSection = () => {
    return (
      <View style={styles.msgSectionStyle}>
        <Image source={images.passwordRecovery} />
        <Text style={styles.msgTextStyle}>{strings.passwordRecoveryMsg}</Text>
      </View>
    );
  };

  const renderInputSection = () => {
    return (
      <View style={styles.inputSectionViewStyle}>
        <KTextInput
          lable={email.length > 0 ? strings.email : ''}
          placeholder={strings.email}
          inputValue={email}
          inputOnChangeText={value => {
            setEmail(value);
            setEmailErrorMsg('');
          }}
          keyboardType="email-address"
          autocompleteType="email"
          textContentType="emailAddress"
        />
        {emailErrorMsg ? <KErrorMessage messageText={emailErrorMsg} /> : null}
      </View>
    );
  };

  const renderBtnSection = () => {
    return (
      <View style={styles.btnSectionViewStyle}>
        <KButton
          title={strings.submit}
          onPress={() => navigation.navigate('CreateNewPassword')}
        />
      </View>
    );
  };

  // const renderDontHaveAccountSection = () => {
  //   return (
  //     <View style={styles.dontHaveAccountSecStyle}>
  //       <Text style={styles.dontHaveAccountTextStyle}>
  //         {strings.dontHaveAccount}{' '}
  //       </Text>
  //       <TouchableOpacity
  //         activeOpacity={0.8}
  //         onPress={() => navigation.navigate('SignUp')}
  //         style={styles.signupViewStyle}>
  //         <Text style={styles.signupTxtStyle}>{strings.signIn}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
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
                  {renderMsgSection()}
                  {renderInputSection()}
                  {renderBtnSection()}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default PasswordRecovery;
