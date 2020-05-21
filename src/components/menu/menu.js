import React from 'react';
import {Image} from 'react-native';
import {View, Button, Text, Content} from 'native-base';
import {colorBlackSecondary, thirdColor} from '../../assets/style/color';

// compare, question,

const row = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
};
const grid = {width: 'auto'};
const button = {
  height: 60,
  width: 60,
  borderRadius: 100,
  margin: 10,
  backgroundColor: thirdColor,
};
const textButton = {
  color: colorBlackSecondary,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
};

const Menu = (props) => {
  return (
    <Content style={{marginTop: 20}}>
      <View style={row}>
        <View style={grid}>
          <Button onPress={props.local} style={button}>
            <Image source={require('../../assets/images/icon/cafe.png')} />
          </Button>
          <Text style={textButton}>Lokal</Text>
        </View>
        <View style={grid}>
          <Button onPress={props.global} style={button}>
            <Image source={require('../../assets/images/icon/planet.png')} />
          </Button>
          <Text style={textButton}>Global</Text>
        </View>
        <View style={grid}>
          <Button onPress={props.compare} style={button}>
            <Image source={require('../../assets/images/icon/boxing.png')} />
          </Button>
          <Text style={textButton}>Compare</Text>
        </View>
        <View style={grid}>
          <Button onPress={props.question} style={button}>
            <Image source={require('../../assets/images/icon/yarn.png')} />
          </Button>
          <Text style={textButton}>Question</Text>
        </View>
      </View>
    </Content>
  );
};

export default Menu;
