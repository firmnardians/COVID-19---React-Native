import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './routes/route';
import {Root} from 'native-base';

import {primaryColor} from './assets/style/color';

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={primaryColor}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <Router />
      </NavigationContainer>
    </Root>
  );
};

export default App;
