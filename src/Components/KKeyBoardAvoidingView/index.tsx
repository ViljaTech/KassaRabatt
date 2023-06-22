import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {keyboardAvoidingviewStyles} from './KKeyboardAvoidingView.styles';
import {KKeyBoardAvoidingProps} from './KKeyBoardAvoidingViewTypes';

export const KKeyboardAvoidingView = (props: KKeyBoardAvoidingProps) => {
  const styles = keyboardAvoidingviewStyles();

  return (
    <KeyboardAvoidingView
      style={[styles.avoidScrollViewStyle, props.customAvoidKeyboardViewStyle]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50}>
      {props.children}
    </KeyboardAvoidingView>
  );
};
