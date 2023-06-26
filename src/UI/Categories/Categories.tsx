import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useAppData} from '../../Providers/AppConfig';
import {categoriesStyles} from './Categories.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {cardData} from '../../Resources/DammyData/DammyData';
import {KCard} from '../../Components/KCard';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Categories'
>;

interface CategoriesProp extends NavigationProp {}
const Categories: React.FC<CategoriesProp> = ({navigation, route}) => {
  const {colors, strings, images} = useAppData();
  const category = route.params.data;
  const styles = categoriesStyles(colors);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>{category}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.backArrowTouchViewStye}>
          <Image source={images.backArrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBrandsSection = () => {
    return (
      <View style={styles.cardViewStyle}>
        {cardData.map((card, index) => (
          <KCard
            key={index}
            addFavorite={() => console.log('cc')}
            title={card.title}
            imgUrl={card.logo}
            percentage={card.percentage}
            onPress={() => navigation.navigate('RabateDetails', {data: card})}
          />
        ))}
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
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {renderBrandsSection()}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Categories;
