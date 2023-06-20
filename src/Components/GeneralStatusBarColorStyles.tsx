import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 60 : StatusBar.currentHeight;
const GeneralStatusBarColor = ({backgroundColor, ...props}: any) => {
  return (
    <View style={{backgroundColor: backgroundColor, height: STATUSBAR_HEIGHT}}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
        barStyle="dark-content"
      />
    </View>
  );
};
export default GeneralStatusBarColor;
