import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Home'>;

interface HomeProp extends NavigationProp {}
const Home: React.FC<HomeProp> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
