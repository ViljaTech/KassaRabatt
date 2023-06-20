import { Bugfender } from '@bugfender/rn-bugfender';
import { useAppData } from '../Providers/AppConfig';
import { StorageKeys } from '../Storage';

// export const bufenderSetDeviceID = async (key: string) => {
//   const { userType } = useAppData();
//   try {
//     if (userType === StorageKeys.PARENT) {
//       Bugfender.setDeviceKey('EMAIL', key);
//     } else {
//       Bugfender.setDeviceKey('UserName', key);
//     }
//   } catch (error) {
//     console.log('While sending bugfender device key, catch executed.', {
//       error,
//     });
//     Bugfender.error(
//       `DeviceHelper.js`,
//       'While sending bugfender device key, catch executed.',
//     );
//   }
// };

export const bugfenderSendLog = (title: string, message: any) => {
  try {
    Bugfender.sendLog({
      tag: title,
      text: message,
    });
  } catch (error) {
    // console.log('While sendLog, bugfenderSendLog catch executed', { error });
    Bugfender.error(
      `While sendLog, bugfenderSendLog catch executed: ${JSON.stringify(
        error,
      )}`,
    );
  }
};

export const bugfenderLog = (message: string) => {
  try {
    Bugfender.log(message);
  } catch (error) {
    // console.log('While log, bugfenderLog catch executed', { error });
    Bugfender.error(
      `While log, bugfenderLog catch executed: ${JSON.stringify(error)}`,
    );
  }
};

export const bugfenderError = (message: string) => {
  try {
    Bugfender.error(message);
  } catch (error) {
    // console.log('While error log, bugfenderError catch executed', { error });
    Bugfender.error(
      `While error log, bugfenderError catch executed: ${JSON.stringify(
        error,
      )}`,
    );
  }
};
