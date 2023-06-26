import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PreRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KTextInput} from '../../Components/KTextInput';
import KErrorMessage from '../../Components/KErrorMessage';
import {KButton} from '../../Components/KButton';
import {createNewPasswordStyles} from './CreateNewPassword.styles';
import {getData, StorageKeys} from '../../Storage';
type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'CreateNewPassword'
>;

interface CreateNewPasswordProp extends NavigationProp {}
const CreateNewPassword: React.FC<CreateNewPasswordProp> = ({navigation}) => {
  const styles = createNewPasswordStyles();
  const {images, strings, colors, userLogin} = useAppData();
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordIsHiden, setCurrentPasswordIsHiden] = useState(true);
  const [currentPasswordErrorMsg, setCurrentPasswordErrorMsg] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState('');
  const [newPasswordIsHiden, setNewPasswordIsHiden] = useState(true);
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [repeatNewPasswordErrorMsg, setRepeatNewPasswordErrorMsg] =
    useState('');
  const [repeatNewPasswordIsHiden, setRepeatNewPasswordIsHiden] =
    useState(true);
  const [userStats, setUserStatus] = useState();

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
        <Text style={styles.headerTextStyle}>
          {userLogin === StorageKeys.USER_LOGIN
            ? strings.changePassword
            : strings.createNewPassword}
        </Text>
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
        {userLogin === StorageKeys.USER_LOGIN && (
          <View style={styles.inputSectionViewStyle}>
            <KTextInput
              lable={currentPassword.length > 0 ? strings.currentPassword : ''}
              placeholder={strings.currentPassword}
              inputValue={currentPassword}
              inputOnChangeText={value => {
                setCurrentPassword(value);
                setCurrentPasswordErrorMsg('');
              }}
              keyboardType="default"
              secureTextEntry
              passwordVisibility={currentPasswordIsHiden}
              passwordVisibilityAction={() =>
                setCurrentPasswordIsHiden(!currentPasswordIsHiden)
              }
            />
            {currentPasswordErrorMsg ? (
              <KErrorMessage messageText={currentPasswordErrorMsg} />
            ) : null}
          </View>
        )}
        <View style={styles.inputSectionViewStyle}>
          <KTextInput
            lable={newPassword.length > 0 ? strings.newPassword : ''}
            placeholder={strings.newPassword}
            inputValue={newPassword}
            inputOnChangeText={value => {
              setNewPassword(value);
              setNewPasswordErrorMsg('');
            }}
            keyboardType="default"
            secureTextEntry
            passwordVisibility={newPasswordIsHiden}
            passwordVisibilityAction={() =>
              setNewPasswordIsHiden(!newPasswordIsHiden)
            }
          />
          {newPasswordErrorMsg ? (
            <KErrorMessage messageText={newPasswordErrorMsg} />
          ) : null}
        </View>
        <View style={styles.inputSectionViewStyle}>
          <KTextInput
            lable={
              repeatNewPassword.length > 0 ? strings.repeatNewPassword : ''
            }
            placeholder={strings.repeatNewPassword}
            inputValue={repeatNewPassword}
            inputOnChangeText={value => {
              setRepeatNewPassword(value);
              setRepeatNewPasswordErrorMsg('');
            }}
            keyboardType="default"
            secureTextEntry
            passwordVisibility={repeatNewPasswordIsHiden}
            passwordVisibilityAction={() =>
              setRepeatNewPasswordIsHiden(!repeatNewPasswordIsHiden)
            }
          />
          {repeatNewPasswordErrorMsg ? (
            <KErrorMessage messageText={repeatNewPasswordErrorMsg} />
          ) : null}
        </View>
      </>
    );
  };

  const renderBtnSection = () => {
    return (
      <View style={styles.btnSectionViewStyle}>
        <KButton title={strings.done} onPress={() => tapOnSaveBtn()} />
      </View>
    );
  };

  const tapOnSaveBtn = () => {
    if (userLogin === StorageKeys.USER_LOGIN) {
      console.log('change Password');
    } else {
      console.log('reset Password');
    }
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
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default CreateNewPassword;
