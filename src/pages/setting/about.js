import React from 'react';
import {View, Text} from 'native-base';

const About = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
      <Text style={{fontSize: 100}}>🇮🇩</Text>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Apa itu COVID ID ?
        </Text>
        <Text>
          COVID ID adalah sebuah aplikasi untuk memantau perkembangan COVID 19
          di Indonesia, aplikasi ini tidak di sponsori oleh siapapun, aplikasi
          tidak dimiliki oleh perusahaan, aplikasi dibuat dengan ❤️ yang tulus
          untuk rakyat Indonesia.
        </Text>
        <View style={{marginTop: 50}}>
          <Text>app version 1.2</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
