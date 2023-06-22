import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {KButtonStyles} from './KButton.styles';
import {KButtonProps} from './KButtonTypes';

export const KButton = (props: KButtonProps) => {
  const appData = useAppData();
  const {images} = useAppData();
  const styles = KButtonStyles(appData.colors, props);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnViewStyle, props.btnViewStyle]}
      disabled={props.disabled ? true : false}
      onPress={props.onPress}>
      {props.title ? (
        <Text style={{...styles.btnTxtStyle, ...props.txtStyle}}>
          {props.title}
        </Text>
      ) : (
        <Text>{''}</Text>
      )}
      {props.imgUrl && <Image source={props.imgUrl} style={styles.imgStyles} />}
    </TouchableOpacity>
  );
};
