import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Icon} from '../../Resources/Svg/Svg';
import {KButton} from '../KButton';
import {KFavoriteCardStyles} from './KFavorite.styles';
import {KFavoriteCardProps} from './KFavoriteTypes';

export const KFavoriteCard = (props: KFavoriteCardProps) => {
  const appData = useAppData();
  const {images, colors, strings} = useAppData();
  const styles = KFavoriteCardStyles(appData.colors, props);

  const renderLeftContainer = () => {
    return (
      <View style={styles.leftViewStyle}>
        <Image
          source={props.imgUrl}
          resizeMode="contain"
          style={styles.leftImgStyle}
        />
      </View>
    );
  };
  const renderRightContainer = () => {
    return (
      <View style={styles.rightViewStyle}>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
        <View style={styles.descTextViewStyle}>
          <Text style={styles.descTextStyle}>{strings.rabatt} </Text>
          <Text style={styles.percentageTextStyle}>{props.percentage}%</Text>
        </View>
      </View>
    );
  };
  const renderIconView = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        style={styles.favoriteBtnStyle}>
        <Icon customColor={colors.appColor} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.subContainerStyle}>
        {renderLeftContainer()}
        <View style={styles.separatorViewStyle}>
          <Image source={images.separator} />
        </View>
        {renderRightContainer()}
      </View>
      {renderIconView()}
    </View>
  );
};
