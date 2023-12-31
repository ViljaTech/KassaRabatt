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
import {LoopData, Options, cardData} from '../../Resources/DammyData/DammyData';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {KButton} from '../../Components/KButton';
import {KCard} from '../../Components/KCard';

type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Home'>;

interface HomeProp extends NavigationProp {}
const Home: React.FC<HomeProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = homeStyle(colors);
  let siCarousel: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Slider_Width = Dimensions.get('screen').width;
  const Item_Width = Math.round(Slider_Width * 0.9);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>{strings.kassRabatt}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          activeOpacity={0.8}
          style={styles.mapTouchViewStyle}>
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
  // let scrollOffsetY = useRef(new Animated.Value(0)).current;
  // let Header_Max_Height = Dimensions.get('screen').height - 100;
  // let Header_Min_Height = 60;
  // const animateHeaderBackgroundColor = scrollOffsetY.interpolate({
  //   inputRange: [0, Header_Max_Height - Header_Min_Height],
  //   outputRange: ['blue', 'red'],
  //   extrapolate: 'clamp',
  // });
  const [stickyHeader, setStickyHeader] = useState(false);
  const [myAnimation, setMyAnimation] = useState(new Animated.Value(0));
  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if (scrollPosition > 352) {
      setStickyHeader(true);
      // Animated.timing(myAnimation, {
      //   toValue: 1,
      //   duration: 160,
      //   useNativeDriver: true,
      // }).start(() => setStickyHeader(true));
    }
    if (scrollPosition < 352) {
      setStickyHeader(false);
      // Animated.timing(myAnimation, {
      //   toValue: 1,
      //   duration: 160,
      //   useNativeDriver: true,
      // }).start(() => setStickyHeader(false));
    }
  };

  const renderOptionsSection = () => {
    return (
      <Animated.View
        style={[
          styles.optionsSectionsStyle,
          {
            backgroundColor: stickyHeader ? colors.appColor : 'transparent',
          },
        ]}>
        <FlatList
          horizontal
          style={{overflow: 'visible'}}
          showsHorizontalScrollIndicator={false}
          data={Options}
          renderItem={renderOptions}
        />
      </Animated.View>
    );
  };

  const renderOptions = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() => setSelectedIndex(index)}
        style={[
          styles.optionsTouchViewStyle,
          {
            backgroundColor: stickyHeader
              ? selectedIndex === index
                ? colors.whiteColor
                : colors.appColor
              : selectedIndex === index
              ? colors.appColor
              : '#F4F4F4',
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
          <ScrollView
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={5}
            onScroll={handleScroll}
            stickyHeaderIndices={[2]}>
            {renderHeaderSection()}
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
