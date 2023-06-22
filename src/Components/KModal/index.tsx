import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Platform} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import Modal from 'react-native-modal';
import {KModalProps} from './KModalTypes';
import {KModalStyles} from './KModal.styles';
export const KModal = (props: KModalProps) => {
  const appData = useAppData();
  const {colors} = appData;
  const styles = KModalStyles(appData.colors, props);
  return (
    <Modal
      isVisible={props.is_Visible}
      style={[styles.modalContainerStyle, props.modalContainer]}
      onBackdropPress={props.onBackdropPress}
      onBackButtonPress={props.onBackButtonPress}
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      animationInTiming={Platform.OS === 'ios' ? 500 : 500}
      animationOutTiming={Platform.OS === 'ios' ? 500 : 100}
      backdropOpacity={props.backdropOpacity || 0.7}>
      <View style={styles.subContainerStyle}>
        <View style={styles.lineStyle} />
        {props.children}
      </View>
    </Modal>
  );
};
