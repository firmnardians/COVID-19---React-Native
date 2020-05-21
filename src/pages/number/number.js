import React from 'react';
import {TouchableOpacity, Linking, StatusBar} from 'react-native';
import {Container, Header, Content, List, ListItem, Text} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {colorWhitePrimary} from '../../assets/style/color';

const cardNumber = {
  height: 150,
  borderWidth: 1,
  borderColor: '#333',
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
};

const phoneText = {
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: 10,
};

const titleNumber = {textAlign: 'center'};
const Number = () => {
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
        <ScrollView>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Kementerian Kesehatan</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:0215210411`)}>
                  <Text>0215210411</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:081212123119`)}>
                  <Text>081212123119</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Pemprov DKI Jakarta</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:112`)}>
                  <Text>112</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:081388376955`)}>
                  <Text>081388376955</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Pemprov Jawa Barat</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:119`)}>
                  <Text>119</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:08112093306`)}>
                  <Text>08112093306</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Pemprov Jawa Tengah</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:0243580713`)}>
                  <Text>0243580713</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:082313600560`)}>
                  <Text>082313600560</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Pemprov D.I Yogyakarta</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:0274555585`)}>
                  <Text>0274555585</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:08112764800`)}>
                  <Text>08112764800</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Pemprov Jawa Timur</Text>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:0243580713`)}>
                  <Text>0243580713</Text>
                </TouchableOpacity>
              </ListItem>
              <ListItem>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:081334367800`)}>
                  <Text>081334367800</Text>
                </TouchableOpacity>
              </ListItem>
            </List>
          </Content>
        </ScrollView>
      </Container>
    </>
  );
};

export default Number;
