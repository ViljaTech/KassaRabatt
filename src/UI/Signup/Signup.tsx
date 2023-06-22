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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KTextInput} from '../../Components/KTextInput';
import KErrorMessage from '../../Components/KErrorMessage';
import {KButton} from '../../Components/KButton';
import {KKeyboardAvoidingView} from '../../Components/KKeyBoardAvoidingView';
import {signUpStyles} from './Signup.styles';
type NavigationProp = NativeStackScreenProps<PreRootStackParamList, 'SignUp'>;

interface SignupProp extends NavigationProp {}
const Signup: React.FC<SignupProp> = ({navigation}) => {
  const styles = signUpStyles();
  const {images, strings, colors} = useAppData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [repeatPasswordErrorMsg, setRepeatPasswordErrorMsg] = useState('');
  const [passwordIsHide, setPasswordIsHide] = useState(true);
  const [repeatPasswordIsHide, setRepeatPasswordIsHide] = useState(true);
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
        <Text style={styles.headerTextStyle}>{strings.signUp}</Text>
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
      <TouchableOpacity activeOpacity={0.8} style={styles.bankSectionViewStyle}>
        <Text style={styles.bankSigninTextStyle}>{strings.signUpWithBank}</Text>
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
        <View style={styles.inputSectionViewStyle}>
          <KTextInput
            lable={password.length > 0 ? strings.repeatPassword : ''}
            placeholder={strings.repeatPassword}
            inputValue={repeatPassword}
            inputOnChangeText={value => {
              setRepeatPassword(value);
              setRepeatPasswordErrorMsg('');
            }}
            autocompleteType="password"
            textContentType="password"
            secureTextEntry
            passwordVisibility={repeatPasswordIsHide}
            passwordVisibilityAction={() =>
              setPasswordIsHide(!repeatPasswordIsHide)
            }
          />
          {repeatPasswordErrorMsg ? (
            <KErrorMessage messageText={repeatPasswordErrorMsg} />
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

  const renderHaveAccountSection = () => {
    return (
      <View style={styles.haveAccountSecStyle}>
        <Text style={styles.haveAccountTextStyle}>
          {strings.haveAnAccount}{' '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
          style={styles.signupViewStyle}>
          <Text style={styles.signInTxtStyle}>{strings.signIn}</Text>
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
                    {renderBtnSection()}
                    {renderHaveAccountSection()}
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

export default Signup;
