import React from 'react';
import {Image} from 'react-native';
import {View, Text, Card, CardItem, Button, Body, Right} from 'native-base';
import {primaryColor} from '../../assets/style/color';

const BolehEnggak = (props) => {
  return (
    <View style={padding}>
      <View>
        <Text
          style={{
            marginBottom: 0,
            marginTop: 21,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Boleh Enggak
        </Text>
        <Text>Cari tau pertanyaan seputar PSBB.</Text>
      </View>

      <Card style={{marginTop: 15}}>
        <CardItem cardBody>
          <Image
            source={require('../../assets/images/resource/quarantine.png')}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem style={{marginTop: 10, marginBottom: 10}}>
          <Body></Body>
          <Right>
            <Button
              onPress={props.getPsbb}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 4,
                backgroundColor: primaryColor,
              }}>
              <Text style={{fontWeight: 'bold'}}>COBA LIHAT</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </View>
  );
};

const padding = {
  paddingLeft: 15,
  paddingRight: 15,
};

export default BolehEnggak;
