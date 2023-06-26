/**
 * For Language add Strings-lan.json file in
 * ../Resources/Strings/ folder and do import as done for Engliosh language
 * and make sure to use the keywords same see included json files version key is same
 *
 * For app theme you can use same or different colors and images as
 * required by following instuctions in respective resouce files
 *
 * To make it as change as the app opens you need to set value to
 * AsyncStorage('lanuage/appTheme') when user changes language/theme
 */
import React, {
  useRef,
  useContext,
  createContext,
  useEffect,
  useState,
} from 'react';
import {
  AppConfigData,
  ConfigType,
  Environment,
} from '../Configurations/Configuration';
import {darkColors, lightColors, colorType} from '../Resources/Colors';
import {darkImages, lightImages, imageType} from '../Resources/Images';
import {AppState, AppStateStatus} from 'react-native';
import {StorageKeys, storeData, getData, removeData} from '../Storage';
import EnglishStrings from '../Resources/Strings/Strings-en.json';
import SpanishStrings from '../Resources/Strings/Strings-es.json';
import SwedishStrings from '../Resources/Strings/Strings-sv.json';
var moment = require('moment');
var es = require('moment/locale/es');
var sv = require('moment/locale/sv');
var en = require('moment/locale/en-gb');
import * as RNLocalize from 'react-native-localize';
import {environment} from '../../app.json';
import {client, setLanguageHeader} from '../Networking/Client';
import _ from 'lodash';

export interface AppDataContextProps {
  currentRoute: string;
  appCurrentState: AppStateStatus;
  configData: ConfigType | null;
  currentEnvironment: Environment;
  setCurrentEnvironment: (environment: Environment) => void;
  setCurrentRoute: (currentRoute: string) => void;
  colors: colorType;
  images: imageType;
  currentTheme: string;
  setAppTheme: (_value: string) => void;
  authToken: string;
  setAuthToken: (_value: string) => void;
  userLogin: string;
  setUserLogin: (_value: string) => void;
  removeData: (_value: StorageKeys) => void;
  strings: any;
  language: string;
  setLanguage: (languageCode: string | null) => void;
}

export const AppDataContext = createContext<AppDataContextProps>({
  configData: null,
  currentEnvironment: environment as Environment,
  setCurrentEnvironment: () => {},
  currentRoute: '',
  appCurrentState: 'unknown',
  setCurrentRoute: () => {},
  colors: lightColors,
  images: lightImages,
  currentTheme: '',
  setAppTheme: (_value: string) => {},
  authToken: '',
  setAuthToken: (_value: string) => {},
  userLogin: '',
  setUserLogin: (_value: string) => {},
  removeData: (_value: StorageKeys) => {},
  strings: EnglishStrings,
  language: '',
  setLanguage: () => {},
});

export const AppProvider: React.FC = (props: any) => {
  const appState = useRef(AppState.currentState);
  const [language, setLanguage] = useState(AppConfigData.defaultLanguage);
  const [currentRoute, setCurrentRoute] = useState('');
  const [configData, setConfigData] = useState<ConfigType | null>(null);
  const [currentEnvironment, setCurrentEnvironment] = useState<Environment>(
    environment as Environment,
  );
  const [appCurrentState, setAppCurrentState] = useState<
    AppDataContextProps['appCurrentState']
  >(appState.current);

  const [appCurrentTheme, setAppCurrentTheme] = useState(
    AppConfigData.defaultTheme,
  );
  const [authToken, setAuthToken] = useState<string>('');

  const [userLogin, setUserLogin] = useState<string>('');

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    let validLanguageCode = language;
    if (!AppConfigData.acceptedLanguage.includes(validLanguageCode)) {
      validLanguageCode = AppConfigData.defaultLanguage;
      setLanguage(validLanguageCode);
    }
    if (validLanguageCode === 'es') {
      moment.updateLocale(validLanguageCode, es);
    } else if (validLanguageCode === 'sv') {
      moment.updateLocale(validLanguageCode, sv);
    } else {
      moment.updateLocale(validLanguageCode, en);
    }
  }, [language]);

  const initialize = async () => {
    let env: Environment = ((await getData(StorageKeys.ENV)) ||
      environment) as Environment;
    setCurrentEnvironment(env);
    client.defaults.baseURL = AppConfigData.getHostUrl(env);
    let theme = await getData(StorageKeys.APP_THEME);
    setAppCurrentTheme(theme || AppConfigData.defaultTheme);

    const {languageCode} = RNLocalize.getLocales()[0];
    let validLanguageCode = languageCode;
    if (!AppConfigData.acceptedLanguage.includes(validLanguageCode)) {
      validLanguageCode = AppConfigData.defaultLanguage;
    }
    setLanguage(
      (await getData(StorageKeys.USER_LANGUAGE)) ||
        validLanguageCode ||
        AppConfigData.defaultLanguage,
    );

    let type = await getData(StorageKeys.USER_LOGIN);
    // console.log('UserType from appconfig init', type);
    setUserLogin(type || '');
  };

  useEffect(() => {
    AppState.addEventListener('change', _appstateHandler);
    return () => {
      AppState.removeEventListener('change', _appstateHandler);
    };
  }, []);

  const _appstateHandler = (nextAppState: AppStateStatus) => {
    appState.current = nextAppState;
    setAppCurrentState(appState.current);
  };

  useEffect(() => {
    client.defaults.baseURL = AppConfigData.getHostUrl(currentEnvironment);
    storeData(StorageKeys.ENV, currentEnvironment);
    setConfigData(AppConfigData.getConfigData(currentEnvironment));
  }, [currentEnvironment]);

  const strings = () => {
    setLanguageHeader(language);
    //To-do: if new language is added, add a new case similar to Eng/Spa
    switch (language) {
      case 'es':
        return {
          ...EnglishStrings,
          ..._.omitBy(SpanishStrings, value => {
            return value === '';
          }),
        };
      case 'sv':
        return {
          ...EnglishStrings,
          ..._.omitBy(SwedishStrings, value => {
            return value === '';
          }),
        };
      case 'en':
        return EnglishStrings;
      default:
        return EnglishStrings;
    }
  };

  return (
    <AppDataContext.Provider
      value={{
        currentEnvironment,
        setCurrentEnvironment,
        configData,
        appCurrentState,
        currentRoute,
        setCurrentRoute,
        colors: appCurrentTheme === 'light' ? lightColors : darkColors,
        images: appCurrentTheme === 'light' ? lightImages : darkImages,
        currentTheme: appCurrentTheme,
        setAppTheme: (value: string) => {
          storeData<String>(StorageKeys.APP_THEME, value);
          setAppCurrentTheme(value);
        },
        authToken,
        setAuthToken: async (value: string) => {
          await storeData(StorageKeys.AUTH_TOKEN, value);
          setAuthToken(value);
        },
        userLogin,
        setUserLogin: async (value: string) => {
          await storeData<String>(StorageKeys.USER_LOGIN, value);
          setUserLogin(value);
        },
        language,
        strings: strings(),
        setLanguage: async (value: any) => {
          await storeData(StorageKeys.USER_LANGUAGE, value);
          setLanguage(value);
        },
        removeData: async (value: StorageKeys) => {
          await removeData(value);
        },
      }}>
      {props.children as any}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
