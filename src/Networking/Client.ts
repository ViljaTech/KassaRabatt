import axios from 'axios';
import {AppConfigData} from '../Configurations/Configuration';
import {getData, StorageKeys} from '../Storage';

export const client = axios.create({
  baseURL: AppConfigData.hostUrl,
  headers: {},
});

/**
 * This code will set the authorization token in headers and it is used for the security purpose
 * @param {string} accessToken
 */
export const setAuthorization = async (accessToken: string | null) => {
  if (accessToken) {
    // console.log('accessToken', accessToken);
    // console.log('Token check if condition:', accessToken);
    (client as any).defaults.headers.Authorization = `Token ${accessToken}`;
  } else {
    let token = await getData(StorageKeys.AUTH_TOKEN);
    (client as any).defaults.headers.Authorization = `Token ${token}`;
  }
};

/**
 * with this method we can remove the authorization token from the headers when user logout
 */
export const removeAuthorization = () => {
  (client as any).defaults.headers.Authorization = '';
};

/**
 *with this code we will set the language in headers
 *@param {string} language default device language
 */
export const setLanguageHeader = async (language: string) => {
  if (language) {
    (client as any).defaults.headers['Accept-Language'] =
      language === 'en' ? 'en-UK' : language === 'sv' ? 'sv-SE' : 'en-UK';
  }
};
