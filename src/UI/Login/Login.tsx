import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PreRootStackParamList} from '../../Navigation/NavigationTypes';
import {loginStyles} from './Login.styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KTextInput} from '../../Components/KTextInput';
import KErrorMessage from '../../Components/KErrorMessage';
import {KButton} from '../../Components/KButton';
import {KKeyboardAvoidingView} from '../../Components/KKeyBoardAvoidingView';
type NavigationProp = NativeStackScreenProps<PreRootStackParamList, 'Login'>;

interface LoginProp extends NavigationProp {}
const Login: React.FC<LoginProp> = ({navigation}) => {
  const styles = loginStyles();
  const {images, strings, colors} = useAppData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [passwordIsHide, setPasswordIsHide] = useState(true);
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
        <Text style={styles.headerTextStyle}>{strings.signIn}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.closeIconTouchViewStyle}>
          <Image source={images.closeIcon} style={styles.closeIconStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBankIdSection = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('SignInWithBank')}
        style={styles.bankSectionViewStyle}>
        <Text style={styles.bankSigninTextStyle}>{strings.signInWithBank}</Text>
      </TouchableOpacity>
    );
  };

  const renderDeviderSection = () => {
    return (
      <View style={styles.deviderSectionViewStyle}>
        <View style={styles.deviderStyle}></View>
        <Text style={styles.orTextStyle}>{strings.or}</Text>
        <View style={styles.deviderStyle}></View>
      </View>
    );
  };

  const renderInputSection = () => {
    return (
      <>
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
        <View style={styles.inputSectionViewStyle}>
          <KTextInput
            lable={password.length > 0 ? strings.password : ''}
            placeholder={strings.password}
            inputValue={password}
            inputOnChangeText={value => {
              setPassword(value);
              setPasswordErrorMsg('');
            }}
            autocompleteType="password"
            textContentType="password"
            secureTextEntry
            passwordVisibility={passwordIsHide}
            passwordVisibilityAction={() => setPasswordIsHide(!passwordIsHide)}
          />
          {passwordErrorMsg ? (
            <KErrorMessage messageText={passwordErrorMsg} />
          ) : null}
        </View>
      </>
    );
  };

  const renderForgotPasswordButton = () => {
    return (
      <View style={styles.forgotPasswordViewStyles}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.forgotPasswordTouchViewStyles}
          onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={styles.forgotPasswordTextStyles}>
            {strings.forgotPassword}
          </Text>
        </TouchableOpacity>
      </View>
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
          style={styles.signInViewStyle}>
          <Text style={styles.signInTxtStyle}>{strings.signUp}</Text>
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
          <View style={styles.containerStyle}>
            <KKeyboardAvoidingView
              customAvoidKeyboardViewStyle={
                styles.customKeyBoardAvoidViewStyle
              }>
              {renderTopDecoratedView()}
              <View style={styles.subContainerStyle}>
                {renderHeaderSection()}
                <ScrollView
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.contentContainerStyle}>
                  <View style={styles.middleContainerStyle}>
                    {renderBankIdSection()}
                    {renderDeviderSection()}
                    {renderInputSection()}
                    {renderForgotPasswordButton()}
                    {renderBtnSection()}
                    {renderDontHaveAccountSection()}
                  </View>
                </ScrollView>
              </View>
            </KKeyboardAvoidingView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Login;
