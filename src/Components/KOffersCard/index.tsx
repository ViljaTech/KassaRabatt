import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useAppData} from '../../Providers/AppConfig';
import {Icon} from '../../Resources/Svg/Svg';
import {KButton} from '../KButton';
import {KOffersCardStyles} from './KOffers.styles';
import {KOffersCardProps} from './KOfforsTypes';

export const KOffersCard = (props: KOffersCardProps) => {
  const appData = useAppData();
  const {images, colors} = useAppData();
  const styles = KOffersCardStyles(appData.colors, props);

  return (
    <View key={props.index} style={styles.containerStyle}>
      <View style={styles.topViewStyle}>
        <Text style={styles.percentageTextStyle}>{props.percentage}%</Text>
        <View style={styles.topSubViewStyle}>
          <Image source={images.qr} style={styles.qrIconStyle} />
          <KButton
            title="Show Code"
            onPress={() => props.onPress()}
            btnViewStyle={styles.showCodeBtnStyle}
            txtStyle={styles.showCodeBtnTextStyle}
          />
        </View>
      </View>
      <Text style={styles.descTextStyle}>{props.description}</Text>
    </View>
  );
};
