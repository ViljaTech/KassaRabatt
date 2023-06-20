import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from './StorageKeys';

export const storeData = async <T>(key: StorageKeys, value: T) => {
  try {
    if (typeof value !== 'string') {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    // console.log(e);
  }
};

export const getData = async (key: StorageKeys) => {
  try {
    return (await AsyncStorage.getItem(key)) || null;
  } catch (e) {
    // console.log('While getting data catch executed:', e);
    return null;
  }
};

export const removeData = async (key: StorageKeys) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    // console.log('While removing data catch executed:', e);
    return null;
  }
};

export {StorageKeys};
