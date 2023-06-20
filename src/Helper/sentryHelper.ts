// import * as Sentry from '@sentry/react-native';
export const sentryCaptureMessage = (message: string, data: any) => {
  // try {
  //   Sentry.withScope(scope => {
  //     scope.setExtra('data', JSON.stringify(data));
  //     Sentry.captureMessage(message);
  //   });
  // } catch (error) {
  //   console.log('While sendingLog, sentryCaptureMessage catch excuted', {
  //     error,
  //   });
  //   Sentry.withScope(scope => {
  //     scope.setExtra('data', JSON.stringify(error));
  //     Sentry.captureException(
  //       'While sendingLog, sentryCaptureMessage catch excuted',
  //     );
  //   });
  // }
};

export const sentryCaptureException = (message: string, data: any) => {
  // try {
  //   Sentry.withScope(scope => {
  //     scope.setExtra('data', JSON.stringify(data));
  //     Sentry.captureException(message);
  //   });
  // } catch (error) {
  //   console.log('While sendingLog, sentryCaptureException catch excuted', {
  //     error,
  //   });
  //   Sentry.withScope(scope => {
  //     scope.setExtra('data', JSON.stringify(error));
  //     Sentry.captureException(
  //       'While sendingLog, sentryCaptureException catch excuted',
  //     );
  //   });
  // }
};

export const sentrySetUser = (user: any) => {
  // try {
  //   Sentry.setUser({
  //     username: user,
  //   });
  // } catch (error) {
  //   console.log('While sendingLog, sentrySetUser catch excuted', {
  //     error,
  //   });
  //   Sentry.withScope(scope => {
  //     scope.setExtra('data', JSON.stringify(error));
  //     Sentry.captureException('While sendingLog, sentrySetUser catch excuted');
  //   });
  // }
};
