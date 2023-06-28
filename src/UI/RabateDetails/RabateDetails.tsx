import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostRootStackParamList} from '../../Navigation/NavigationTypes';
import {useAppData} from '../../Providers/AppConfig';
import {rabateDetailsStyle} from './RabateDetails.styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../Components/CustomStatusBar';
import {KButton} from '../../Components/KButton';
import {KOffersCard} from '../../Components/KOffersCard';
import {OffersData} from '../../Resources/DammyData/DammyData';
import {KModal} from '../../Components/KModal';
type NavigationProp = NativeStackScreenProps<
  PostRootStackParamList,
  'RabateDetails'
>;

interface RabateDetailsProp extends NavigationProp {}
export interface offerDetails {
  percentage: string;
  description: string;
}
const RabateDetails: React.FC<RabateDetailsProp> = ({navigation, route}) => {
  const {colors, images, strings} = useAppData();
  const styles = rabateDetailsStyle(colors);
  const companyData = route.params.data;
  const [selectedCode, setSelectedCode] = useState<offerDetails>();
  const [is_ModalVisible, setIs_ModalVisible] = useState(false);

  const renderHeaderSection = () => {
    return (
      <View style={styles.headerSectionStyle}>
        <Text style={styles.headerTextStyle}>{strings.qrCodes}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.backBtnTouchViewStyle}>
          <Image source={images.backArrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderTopSection = () => {
    return (
      <View style={styles.companyLogoContainerStyle}>
        {renderCompanyLogoSection()}
      </View>
    );
  };

  const renderCompanyLogoSection = () => {
    return (
      <View style={styles.companyLogoViewStyle}>
        <View style={styles.companyLogoSubViewStyle}>
          <Image
            resizeMode="contain"
            source={companyData.logo}
            style={styles.companyLogoStyle}
          />
        </View>
      </View>
    );
  };

  const renderCompanyDetailsSection = () => {
    return (
      <View style={styles.companyDetaisSectionStyle}>
        <Text style={styles.titleTextStyle}>{companyData.title}</Text>
        <View style={styles.descTextViewStyle}>
          <Text style={styles.companyDescTextStyle}>{strings.rebateUpTo} </Text>
          <Text style={styles.percentageTextStyle}>
            {companyData.percentage}%{' '}
          </Text>
        </View>
        <KButton
          title={strings.addToFavorite}
          onPress={() => console.log('ccc')}
          imgUrl={images.icon}
          btnViewStyle={styles.btnViewStyle}
          txtStyle={styles.btnTextStyle}
        />
      </View>
    );
  };

  const renderOffersSection = () => {
    return (
      <View style={styles.offersSectionStyle}>
        {OffersData.map((offer, index) => (
          <KOffersCard
            key={index}
            onPress={() => {
              setIs_ModalVisible(true), setSelectedCode(offer);
            }}
            percentage={offer.percentage}
            description={offer.description}
          />
        ))}
      </View>
    );
  };

  const renderModal = () => {
    return (
      <KModal
        is_Visible={is_ModalVisible}
        onBackdropPress={() => setIs_ModalVisible(false)}>
        <View style={styles.bottomModalViewStyle}>
          <Text style={styles.percentageTextStyle2}>
            {selectedCode?.percentage}%
          </Text>
          <Text style={styles.modalTextDescStyle}>
            {strings.rebateOnAllScrewdrivers}
          </Text>
          <Image source={images.qrBig} style={styles.bigQrCodeStyle} />
          <KButton
            title={strings.done}
            onPress={() => setIs_ModalVisible(false)}
            btnViewStyle={styles.doneBtnStyle}
          />
        </View>
      </KModal>
    );
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.appColor}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.containerStyle}>
          {renderHeaderSection()}
          <ScrollView
            style={styles.middleSectionStyle}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            bounces={false}>
            {renderTopSection()}
            {renderCompanyDetailsSection()}
            {renderOffersSection()}
          </ScrollView>
          {renderModal()}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default RabateDetails;
