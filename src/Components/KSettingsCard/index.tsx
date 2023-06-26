import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Icon} from '../../Resources/Svg/Svg';
import {KButton} from '../KButton';
import {KSettingsCardStyles} from './KSettingsCard.styles';
import {KSettingsCardProps} from './KSettingsTypes';

export const KSettingsCard = (props: KSettingsCardProps) => {
  const appData = useAppData();
  const {images, colors, strings} = useAppData();
  const styles = KSettingsCardStyles(appData.colors, props);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.containerStyle, props.customSettingsCardViewStyle]}>
      <View style={styles.leftViewStyle}>
        {props.leftIcon && (
          <Image
            source={props.leftIcon}
            resizeMode="contain"
            style={styles.leftImageIcon}
          />
        )}
        <View style={styles.textViewStyle}>
          <Text style={styles.titleTextStyle}>{props.title}</Text>
          {props.description && (
            <Text style={styles.descTextStyle}>{props.description}</Text>
          )}
        </View>
      </View>
      <View style={styles.rightViewStyle}>
        <Image source={images.arrow} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};
