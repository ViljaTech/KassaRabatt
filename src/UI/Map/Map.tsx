import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {mapStyles} from './Map.styles';
import {useAppData} from '../../Providers/AppConfig';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Map'>;

interface MapProp extends NavigationProp {}
const Map: React.FC<MapProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = mapStyles(colors);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>Map</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.backBtnTouchViewStyle}>
          <Image source={images.backArrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.emptyViewStyle}>
        <Image source={images.retryPlaceholder} />
        <Text style={styles.emptyViewTextStyle}>
          {strings.youDontFavoriteRebates}
        </Text>
      </View>
    );
  };
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          {renderHeaderSection()}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Map;
