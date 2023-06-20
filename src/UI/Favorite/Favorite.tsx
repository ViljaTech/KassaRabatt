import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Favorite'
>;

interface FavoriteProp extends NavigationProp {}
const Favorite: React.FC<FavoriteProp> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  );
};

export default Favorite;
