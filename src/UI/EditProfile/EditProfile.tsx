import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import {editProfileStyles} from './EditProfile.styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KButton} from '../../Components/KButton';
import KErrorMessage from '../../Components/KErrorMessage';
import {KTextInput} from '../../Components/KTextInput';
import {StorageKeys} from '../../Storage';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'EditProfile'
>;

interface EditProfileProp extends NavigationProp {}
const EditProfile: React.FC<EditProfileProp> = ({navigation}) => {
  const {colors, strings, images, setUserLogin, removeData} = useAppData();
  const styles = editProfileStyles(colors);
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
        <Text style={styles.headerTextStyle}>{strings.editProfile}</Text>
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
        <KButton title={strings.save} onPress={() => {}} />
      </View>
    );
  };

  const renderChangePasswordBtn = () => {
    return (
      <View style={styles.btnSectionViewStyle}>
        <KButton
          title={strings.changePassword}
          onPress={() => navigation.navigate('CreateNewPassword')}
          btnViewStyle={styles.changePsdBtnStyle}
        />
      </View>
    );
  };

  const renderLogoutBtn = () => {
    return (
      <View style={styles.logoutViewStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            removeData(StorageKeys.USER_LOGIN),
              setUserLogin(''),
              navigation.reset({
                index: 1,
                routes: [{name: 'Login'}],
              });
          }}
          style={styles.logoutTouchViewStyle}>
          <Image
            source={images.logoutIcon}
            style={styles.logoutIconStyle}
            resizeMode="contain"
          />
          <Text style={styles.logoutTextStyle}>{strings.logout}</Text>
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
                  <View>
                    {renderInputSection()}
                    {renderBtnSection()}
                    {renderChangePasswordBtn()}
                  </View>
                  <View>{renderLogoutBtn()}</View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default EditProfile;
