import React from 'react';
import {StatusBar} from 'react-native';
import {Tab, Tabs, Container, Root} from 'native-base';
import GlobalGraph from './globalGraph';
import State from './state';
import {
  primaryColor,
  colorBlackSecondary,
  colorWhitePrimary,
} from '../../assets/style/color';

const Global = () => {
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
            heading="Statistik"
            textStyle={{color: colorBlackSecondary}}
            activeTextStyle={{color: primaryColor, fontWeight: 'bold'}}
            tabStyle={{backgroundColor: colorWhitePrimary}}
            activeTabStyle={{backgroundColor: colorWhitePrimary}}>
            <GlobalGraph />
          </Tab>
          <Tab
            heading="Negara"
            textStyle={{color: colorBlackSecondary}}
            activeTextStyle={{color: primaryColor, fontWeight: 'bold'}}
            tabStyle={{backgroundColor: colorWhitePrimary}}
            activeTabStyle={{backgroundColor: colorWhitePrimary}}>
            <State />
          </Tab>
        </Tabs>
      </Container>
    </Root>
  );
};

export default Global;
