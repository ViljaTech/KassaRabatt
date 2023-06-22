import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {useAppData} from '../../Providers/AppConfig';
import {homeStyle} from './Home.styles';
import {LoopData, Options, cardData} from '../../Resources/DammyData/Home';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {KButton} from '../../Components/KButton';
import {KCard} from '../../Components/KCard';

type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Home'>;

interface HomeProp extends NavigationProp {}
const Home: React.FC<HomeProp> = ({navigation}) => {
  const {colors, images} = useAppData();
  const styles = homeStyle(colors);
  let siCarousel: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Slider_Width = Dimensions.get('screen').width;
  const Item_Width = Math.round(Slider_Width * 0.9);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>KassRabatt</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.mapTouchViewStyle}>
          <Image source={images.mapIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderCarouselAndPaginationSection = () => {
    return (
      <View style={styles.carouselViewStyle}>
        <Carousel
          layout={'default'}
          ref={siCarousel}
          data={LoopData}
          sliderWidth={Slider_Width}
          itemWidth={Item_Width}
          renderItem={_renderItem}
          onSnapToItem={index => setCurrentIndex(index)}
        />
        <Pagination
          dotsLength={LoopData.length}
          activeDotIndex={currentIndex}
          carouselRef={siCarousel}
          dotStyle={styles.paginationDotStyle}
        />
      </View>
    );
  };
  const _renderItem = ({item, index}: any) => {
    return (
      <View key={index} style={styles.carouselStyle}>
        <Image source={item.coverImage} style={styles.coverImgStyle} />
        <View style={styles.coverImgDetailsViewStyle}>
          <View style={styles.coverImgDetailsSubViewStyle}>
            <Image source={item.companyLogo} style={styles.companyLogoStyle} />
            <View style={styles.companyDetailsStyle}>
              <Text style={styles.companyNameTextStyle}>{item.name}</Text>
              <Text style={styles.companyDescTextStyle}>{item.desc}</Text>
            </View>
          </View>
          <Text style={styles.percentageTextStyle}>{item.perecentage}</Text>
        </View>
      </View>
    );
  };

  const renderOptionsSection = () => {
    return (
      <View style={styles.optionsSectionsStyle}>
        <FlatList
          horizontal
          style={{overflow: 'visible'}}
          showsHorizontalScrollIndicator={false}
          data={Options}
          renderItem={renderOtions}
        />
      </View>
    );
  };

  const renderOtions = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() => setSelectedIndex(index)}
        style={[
          styles.optionsTouchViewStyle,
          {
            backgroundColor:
              selectedIndex === index ? colors.appColor : 'transparent',
          },
        ]}>
        <Text style={styles.optionTextStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderCardsSection = () => {
    return (
      <View style={styles.cardSectionStyle}>
        {cardData.length > 0 ? renderCards() : renderEmptySection()}
      </View>
    );
  };

  const renderCards = () => {
    return (
      <View style={styles.cardViewStyle}>
        {cardData.map((card, index) => (
          <KCard
            addFavorite={() => console.log('cc')}
            title={card.title}
            imgUrl={card.logo}
            percentage={card.percentage}
            onPress={() => console.log('cc')}
          />
        ))}
      </View>
    );
  };

  const renderEmptySection = () => {
    return (
      <View style={styles.emptyViewStyle}>
        <Image source={images.retryPlaceholder} />
        <KButton
          title="Retry"
          onPress={() => console.log('cc')}
          btnViewStyle={styles.btnViewStyle}
        />
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
          <ScrollView
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            {renderCarouselAndPaginationSection()}
            {renderOptionsSection()}
            {renderCardsSection()}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Home;
