import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppData} from '../../Providers/AppConfig';
import {favoriteStyle} from './Favorite.styles';
import CustomStatusBar from '../../Components/CustomStatusBar';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'Favorite'
>;

interface FavoriteProp extends NavigationProp {}
const Favorite: React.FC<FavoriteProp> = ({navigation}) => {
  const {colors} = useAppData();
  const styles = favoriteStyle();
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          <Text>Favorite</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Favorite;
