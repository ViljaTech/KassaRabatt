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
import {createNewPasswordStyles} from './CreateNewPassword.styles';
type NavigationProp = NativeStackScreenProps<
  PreRootStackParamList,
  'CreateNewPassword'
>;

interface CreateNewPasswordProp extends NavigationProp {}
const CreateNewPassword: React.FC<CreateNewPasswordProp> = ({navigation}) => {
  const styles = createNewPasswordStyles();
  const {images, strings, colors} = useAppData();
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [repeatNewPasswordErrorMsg, setRepeatNewPasswordErrorMsg] =
    useState('');
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
        <Text style={styles.headerTextStyle}>{strings.createNewPassword}</Text>
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
            lable={newPassword.length > 0 ? strings.newPassword : ''}
            placeholder={strings.newPassword}
            inputValue={newPassword}
            inputOnChangeText={value => {
              setNewPassword(value);
              setNewPasswordErrorMsg('');
            }}
            keyboardType="default"
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
        <KButton title={strings.done} onPress={() => console.log('cc')} />
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
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default CreateNewPassword;
