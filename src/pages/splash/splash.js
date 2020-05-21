import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {primaryColor} from '../../assets/style/color';

const stylesSplash = {
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontWeight: 'bold',
  marginTop: 5,
  fontSize: 26,
};

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image
        style={{width: 120, height: 120}}
        source={require('../../assets/images/resource/covid.png')}
      /> */}
      <Text style={stylesSplash}>COVID ID</Text>
    </View>
  );
};

export default Splash;
