import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Search'>;

interface SearchProp extends NavigationProp {}
const Search: React.FC<SearchProp> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;
