import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {mapStyles} from './Map.styles';
import {useAppData} from '../../Providers/AppConfig';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {KButton} from '../../Components/KButton';
import {Alert} from 'react-native';
type NavigationProp = NativeStackScreenProps<PostRootStackParamList, 'Map'>;
interface MapProp extends NavigationProp {}
const Map: React.FC<MapProp> = ({navigation}) => {
  const {colors, images, strings} = useAppData();
  const styles = mapStyles(colors);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const mapView = useRef(null);
  const [myRegion, setMyRegion] = useState<any>();
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 170,
    longitudeDelta: 180,
  });

  useEffect(() => {
    setMyRegion(position);
  }, [position]);

  const getUserLocation = () => {
    try {
      Geolocation.getCurrentPosition(pos => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ).then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            setPermissionDenied(true);
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            // Permission has been granted - app can request location coordinates
            getUserLocation();
            break;
          case RESULTS.BLOCKED:
            setPermissionDenied(true);
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      });
    });
  }, [navigation]);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>Map</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.backBtnTouchViewStyle}>
          <Image source={images.backArrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.emptyViewStyle}>
        <Image source={images.location} />
        <Text style={styles.emptyViewTextStyle}>
          {strings.pleaseAllowLocation}
        </Text>
        <KButton
          title={strings.goToSettings}
          onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL('app-settings://');
            } else {
              Linking.openSettings();
            }
          }}
          btnViewStyle={styles.btnViewStyle}
        />
      </View>
    );
  };
  const locations = [
    {
      latitude: 17.41084254000944,
      longitude: 78.47645727220223,
    },
    {
      latitude: 17.414835471565556,
      longitude: 78.48103511757449,
    },
  ];
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainerStyle}>
          {renderHeaderSection()}
          {permissionDenied ? (
            renderEmptyView()
          ) : (
            <View style={{flex: 1, width: '100%'}}>
              <MapView
                ref={mapView}
                provider={'google'}
                style={styles.map}
                initialRegion={position}
                region={myRegion}
                zoomEnabled={true}
                zoomControlEnabled={true}
                zoomTapEnabled={true}
                minZoomLevel={0}
                maxZoomLevel={20}
                scrollEnabled={true}
                showsScale={true}
                loadingEnabled={true}
                loadingIndicatorColor="#666666"
                loadingBackgroundColor="#eeeeee"
                moveOnMarkerPress={false}
                showsUserLocation={true}
                showsCompass={true}
                showsMyLocationButton={true}
                showsPointsOfInterest={true}>
                {locations.map((loc, index) => (
                  <Marker key={index} coordinate={loc} pinColor={'red'} />
                ))}
              </MapView>
            </View>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default Map;
