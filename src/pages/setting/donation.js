import React from 'react';
import {Image} from 'react-native';
import {View, Text, Content, Grid, Col} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {colorWhiteSecondary} from '../../assets/style/color';

const BCA_NUMBER = '7 6 2 0 9 3 6 7 1 0';
const Donation = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={header}>
          <Text style={headerTitle}>Donasi</Text>
          <Text style={{color: 'white'}}>
            Aku berkomitmen untuk membuat aplikasi ini bebas iklan selamanya,
            agar kamu bisa mendapatkan kenyamanan saat menggunakan aplikasi ini.
            kamu bisa berdonasi agar aplikasi terus berkembang dan berjalan.
          </Text>
        </View>
        <Content>
          <View style={cardBca}>
            <View style={contentRekening}>
              <Text style={textRekening}>Nomor Rekening</Text>
              <Text style={numberRekening}>{BCA_NUMBER}</Text>
            </View>
            <Grid>
              <Col>
                <Text style={bottomText}>Nama</Text>
                <Text style={bottomNumber}>Ade Firman Ardiansyah</Text>
              </Col>
              <Col>
                <Image
                  style={bcaLogo}
                  source={require('../../assets/images/resource/bca.png')}
                />
              </Col>
            </Grid>
          </View>
        </Content>
        <Content>
          <View
            style={{
              backgroundColor: colorWhiteSecondary,
              height: 10,
              marginTop: 0,
              marginBottom: 10,
            }}
          />
        </Content>

        <Content style={{margin: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Metode pembayaran
            </Text>
            <Text>Pilih metode pembayaran yang lainnya.</Text>
          </View>
          <View style={cardListPayment}>
            <Grid>
              <Col>
                <Text style={paymentName}>Jenius</Text>
              </Col>
              <Col>
                <Text style={paymentID}>$firmnardians</Text>
              </Col>
            </Grid>
          </View>

          <View style={cardListPayment}>
            <Grid>
              <Col>
                <Text style={paymentName}>OVO</Text>
              </Col>
              <Col>
                <Text style={paymentID}>081398907475</Text>
              </Col>
            </Grid>
          </View>

          <View style={cardListPayment}>
            <Grid>
              <Col>
                <Text style={paymentName}>GOPAY</Text>
              </Col>
              <Col>
                <Text style={paymentID}>081398907475</Text>
              </Col>
            </Grid>
          </View>
        </Content>
      </ScrollView>
    </>
  );
};

const header = {
  padding: 30,
  backgroundColor: '#30475e',
};

const headerTitle = {
  fontSize: 28,
  color: '#fff',
  fontWeight: 'bold',
};
const cardBca = {
  padding: 20,
  borderRadius: 10,
  backgroundColor: 'dodgerblue',
  height: 200,
  margin: 30,
};
const paymentName = {
  fontWeight: 'bold',
  fontSize: 16,
};

const paymentID = {
  fontSize: 16,
};
const cardListPayment = {
  padding: 20,
  borderRadius: 6,
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: colorWhiteSecondary,
};

const textRekening = {
  color: 'white',
};

const numberRekening = {
  color: 'white',
  fontSize: 26,
  fontWeight: 'bold',
};

const contentRekening = {
  marginBottom: 40,
};
const bottomText = {
  color: '#fff',
  fontSize: 14,
};
const bottomNumber = {
  color: '#fff',
  fontWeight: 'bold',
};

const bcaLogo = {
  width: 110,
  resizeMode: 'stretch',
  height: 40,
  position: 'relative',
  right: -40,
  top: 20,
};
export default Donation;
