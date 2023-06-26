import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import {favoriteStyle} from './Favorite.styles';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KOffersCard} from '../../Components/KOffersCard';
import {KFavoriteCard} from '../../Components/KFavoriteCard';
import {cardData} from '../../Resources/DammyData/DammyData';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Favorite'
>;

interface FavoriteProp extends NavigationProp {}
const Favorite: React.FC<FavoriteProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = favoriteStyle(colors);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>Favorite</Text>
      </View>
    );
  };

  const renderFavoriteCrads = () => {
    return (
      <View>
        {cardData.map((data, index) => (
          <View key={index}>
            <KFavoriteCard
              title={data.title}
              percentage={data.percentage}
              onPress={() => console.log('ccc')}
              imgUrl={data.logo}
            />
          </View>
        ))}
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
          {cardData.length > 0 ? (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
              {renderFavoriteCrads()}
            </ScrollView>
          ) : (
            renderEmptyView()
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Favorite;
