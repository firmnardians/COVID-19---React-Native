import React from 'react';
import {StatusBar} from 'react-native';
import {Tab, Tabs, Container, Root} from 'native-base';
import Statistik from './statistik';
import Provinsi from './provinsi';
import {
  primaryColor,
  colorBlackSecondary,
  colorWhitePrimary,
} from '../../assets/style/color';

const Local = () => {
  return (
    <Root>
      <Container>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colorWhitePrimary}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        <Tabs tabBarUnderlineStyle={{backgroundColor: primaryColor}}>
          <Tab
            heading="Indonesia"
            textStyle={{color: colorBlackSecondary}}
            activeTextStyle={{color: primaryColor, fontWeight: 'bold'}}
            tabStyle={{backgroundColor: colorWhitePrimary}}
            activeTabStyle={{backgroundColor: colorWhitePrimary}}>
            <Statistik />
          </Tab>
          <Tab
            heading="Provinsi"
            textStyle={{color: colorBlackSecondary}}
            activeTextStyle={{color: primaryColor, fontWeight: 'bold'}}
            tabStyle={{backgroundColor: colorWhitePrimary}}
            activeTabStyle={{backgroundColor: colorWhitePrimary}}>
            <Provinsi />
          </Tab>
        </Tabs>
      </Container>
    </Root>
  );
};

export default Local;
