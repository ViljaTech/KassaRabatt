import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {useAppData} from '../../Providers/AppConfig';
import {searchStyle} from './Search.styles';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Search'>;

interface SearchProp extends NavigationProp {}
const Search: React.FC<SearchProp> = ({navigation}) => {
  const {colors} = useAppData();
  const styles = searchStyle();
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          <Text>Search</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Search;
