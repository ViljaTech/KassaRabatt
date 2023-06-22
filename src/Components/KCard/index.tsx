import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Icon} from '../../Resources/Svg/Svg';
import {KCardStyles} from './KCard.styles';
import {KCardProps} from './KCardTypes';

export const KCard = (props: KCardProps) => {
  const appData = useAppData();
  const {images, colors} = useAppData();
  const styles = KCardStyles(appData.colors, props);
  const keys = [...Array(15).keys()];

  const renderTopSection = () => {
    return (
      <View style={styles.cardTopViewStyle}>
        <View style={styles.favoriteIconViewStyle}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.addFavorite}
            style={styles.favoriteIconTouchViewStyle}>
            <Icon />
          </TouchableOpacity>
        </View>
        <View style={styles.companyLogoViewStyle}>
          <Image
            source={props.imgUrl}
            defaultSource={images.coverImage}
            style={styles.companyLogoStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titleViewStyle}>
          <Text style={styles.titleTextStyle} numberOfLines={1}>
            {props.title}
          </Text>
        </View>
      </View>
    );
  };

  const renderBottomSection = () => {
    return (
      <View style={styles.cardBottomViewStyle}>
        <View style={styles.circlesViewStyle}>
          {keys.map((item, index) => (
            <View key={index} style={styles.circleStyle}></View>
          ))}
        </View>
        <Text style={styles.cardBottomTextStyle}>Rabatt</Text>
        <Text style={styles.percentageTextStyle}>{props.percentage}%</Text>
      </View>
    );
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.containerStyle}
      onPress={props.onPress}>
      <View style={styles.subContainerStyle}>
        {renderTopSection()}
        {renderBottomSection()}
      </View>
    </TouchableOpacity>
  );
};
