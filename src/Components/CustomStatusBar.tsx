import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 60 : StatusBar.currentHeight;
const CustomStatusBar = ({backgroundColor, barStyle, ...props}: any) => {
  return (
    <View style={{backgroundColor: backgroundColor, height: STATUSBAR_HEIGHT}}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        // {...props}
        hidden={false}
        barStyle={barStyle}
      />
    </View>
  );
};
export default CustomStatusBar;
