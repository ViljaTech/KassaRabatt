import {View, Text, Image} from 'react-native';
import React from 'react';
import {useAppData} from '../../Providers/AppConfig';
import {KErrorMessageStyles} from './KErrorMessage.styles';
import {KErrorMessageProps} from './KErrorMessageTypes';

const KErrorMessage = (props: KErrorMessageProps) => {
  const appData = useAppData();
  const {images} = useAppData();
  const styles = KErrorMessageStyles(appData.colors, props);

  return (
    <View style={styles.mainViewStyle}>
      <Image source={images.errorIcon} />
      <Text style={styles.messasgeTextStyle}>{props.messageText}</Text>
    </View>
  );
};

export default KErrorMessage;
