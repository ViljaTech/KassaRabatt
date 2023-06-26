import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {useAppData} from '../../Providers/AppConfig';
import {searchStyle} from './Search.styles';
import {KTextInput} from '../../Components/KTextInput';
import {TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Options, cardData} from '../../Resources/DammyData/DammyData';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Search'>;

interface SearchProp extends NavigationProp {}
export interface brands {
  title: string;
  percentage: string;
  logo: any;
}
const Search: React.FC<SearchProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = searchStyle(colors);
  const [filteredData, setFilteredData] = useState<brands[]>();
  const [searchText, setSearchText] = useState('');
  const [showCancel, setShowCancel] = useState(false);
  const animation = useSharedValue(1);
  const Width = Dimensions.get('screen').width - 32;
  const Width2 = Dimensions.get('screen').width - 90;
  const refInput = React.useRef<TextInput>(null);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(Width, {duration: 300})
          : withTiming(Width2, {duration: 300}),
    };
  });

  useEffect(() => {
    search();
  }, [searchText]);

  const search = async () => {
    if (searchText != '') {
      let ddd = await cardData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredData(ddd);
    } else {
      setFilteredData([]);
    }
  };

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Animated.View style={[styles.searchBarViewStyle, animatedStyle]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => refInput.current?.focus()}
            style={[
              styles.searchBarTouchViewSTyle,
              {justifyContent: showCancel ? 'flex-start' : 'center'},
            ]}>
            <Image source={images.search} resizeMode="contain" />
            {renderSearchInput()}
          </TouchableOpacity>
        </Animated.View>
        {showCancel && (
          <TouchableOpacity
            onPress={() => {
              if (animation.value === 1) {
                animation.value = 0;
              } else {
                animation.value = 1;
              }
              setSearchText('');
              setShowCancel(false);
              Keyboard.dismiss();
            }}>
            <Text style={styles.cancelTextStyle}>{strings.cancel}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderSearchInput = () => {
    return (
      <TextInput
        style={styles.textInputStyle}
        ref={refInput}
        value={searchText}
        placeholder="Search Store or Brand"
        placeholderTextColor={colors.textColor}
        onChangeText={text => setSearchText(text)}
        onFocus={() => {
          if (animation.value === 1) {
            animation.value = 0;
          } else {
            animation.value = 1;
          }
          setShowCancel(true);
        }}
        onBlur={() => {
          animation.value = 1;
          setShowCancel(false);
        }}
      />
    );
  };

  const renderSearchCategoriesSection = () => {
    return (
      <View style={styles.searchCategorysSectionStyle}>
        {Options.map((category, index) => (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            onPress={() => navigation.navigate('Categories', {data: category})}
            style={styles.eachCategoryViewStyle}>
            <View style={styles.eachCategorySubViewStyle}>
              <Text style={styles.categoryTextStyle}>{category}</Text>
              <Text style={styles.categoryBransTextStyle}>5 Brands</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderSearchResult = () => {
    return (
      <View style={styles.searchResultViewStyle}>
        {filteredData?.map((data: brands, index) => (
          <View key={index} style={styles.searchResultCardViewStyle}>
            <Image
              source={data.logo}
              resizeMode="contain"
              style={styles.brandImgStyle}
            />
            <Text style={styles.brandTextStyle}>{data.title}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.emptyViewStyle}>
        <Image source={images.noSearchResults} />
        <Text style={styles.noResultTextStyle}>{strings.noResults}</Text>
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
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <ScrollView
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.contentContainerStyle,
                {
                  justifyContent:
                    searchText && filteredData && filteredData?.length === 0
                      ? 'center'
                      : 'flex-start',
                },
              ]}>
              {searchText && filteredData && filteredData?.length > 0
                ? renderSearchResult()
                : searchText && filteredData && filteredData?.length === 0
                ? renderEmptyView()
                : renderSearchCategoriesSection()}
            </ScrollView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Search;
