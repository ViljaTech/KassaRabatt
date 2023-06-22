import React from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {KTextInputStyles} from './KTextInput.styles';
import {KTextInputProps} from './KTextInputTypes';

export const KTextInput = (props: KTextInputProps) => {
  const appData = useAppData();
  const {images} = useAppData();
  const styles = KTextInputStyles(appData.colors, props);
  return (
    <>
      {props.inputValue != '' && (
        <Text style={styles.lableTextStyle}>{props.lable}</Text>
      )}
      <View style={[styles.textInputViewStyle, props.textInputViewStyle]}>
        <TextInput
          style={[styles.textInputStyle, props.textInputStyle]}
          placeholder={props.placeholder}
          placeholderTextColor={appData.colors.blackColor}
          secureTextEntry={props.passwordVisibility}
          value={props.inputValue}
          onChangeText={text => props.inputOnChangeText(text)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={props.keyboardType || 'default'}
          editable={props.textEditable}
          multiline={props.multiline || false}
          numberOfLines={props.numberOfLines || 4}
          textAlignVertical={props.multiline ? 'top' : 'center'}
          underlineColorAndroid="transparent"
          textContentType={props.textContentType || 'none'}
        />
        {props.secureTextEntry ? (
          <TouchableOpacity
            style={styles.secureViewStyle}
            onPress={props.passwordVisibilityAction}>
            <Image
              style={styles.secureImageStyle}
              source={
                props.passwordVisibility ? images.eye_close : images.eye_open
              }
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};
