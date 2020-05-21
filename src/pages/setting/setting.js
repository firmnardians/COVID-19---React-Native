import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {colorWhitePrimary} from '../../assets/style/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Setting = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colorWhitePrimary}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Container>
        <Content>
          <List>
            {/* <TouchableOpacity onPress={() => navigation.navigate('DarkMode')}>
              <ListItem>
                <Text>Dark Mode</Text>
              </ListItem>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('Donation')}>
              <ListItem>
                <Text>Donasi</Text>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <ListItem>
                <Text>About</Text>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    </>
  );
};

export default Setting;
