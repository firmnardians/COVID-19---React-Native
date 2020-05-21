import React from 'react';
import {colorWhitePrimary, primaryColor} from '../../assets/style/color';
import {View, Text, Button, Item, Picker} from 'native-base';

const BottomSheetCompare = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Pilih negara 1
          </Text>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{width: undefined}}
              placeholder="Silahkan pilih"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              onValueChange={props.onChange1}
              selectedValue={props.selected1}>
              {props.mapCountryList}
            </Picker>
          </Item>
        </View>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Pilih negara 2
          </Text>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{width: undefined}}
              placeholder="Silahkan pilih"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              onValueChange={props.onChange2}
              selectedValue={props.selected2}>
              {props.mapCountryList}
            </Picker>
          </Item>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Button
          style={{
            height: 60,
            backgroundColor: primaryColor,
            fontWeight: 'bold',
            justifyContent: 'center',
          }}
          onPress={props.submit}>
          <Text
            style={{
              fontWeight: 'bold',
              color: colorWhitePrimary,
              fontSize: 16,
            }}>
            MULAI
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default BottomSheetCompare;
