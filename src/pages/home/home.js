import React from 'react';
import {StatusBar} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import BolehEnggak from '../../components/bolehenggak/bolehenggak';
import {
  Container,
  Button,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Title,
  Header,
  View,
} from 'native-base';
import {
  primaryColor,
  colorWhitePrimary,
  colorWhiteSecondary,
  colorBlackSecondary,
} from '../../assets/style/color';
import Menu from '../../components/menu/menu';
import Preventation from '../../components/preventation/preventation';

const Home = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={primaryColor}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Header
        androidStatusBarColor={primaryColor}
        style={{backgroundColor: primaryColor}}
        noLeft>
        <Left />
        <Body>
          <Title style={{fontWeight: 'bold', fontSize: 21}}>COVID ID</Title>
        </Body>
        <Right>
          <TouchableOpacity
            style={{paddingRight: 5, paddingLeft: 10}}
            onPress={() => navigation.navigate('Setting')}>
            <Icon
              name="md-information-circle"
              size={30}
              color={colorWhitePrimary}
            />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        <Content padder>
          <Card>
            <CardItem bordered style={{backgroundColor: colorWhitePrimary}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: colorBlackSecondary,
                }}>
                Apakah kamu merasa sakit?
              </Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor: colorWhitePrimary}}>
              <Body>
                <Text style={{color: colorBlackSecondary}}>
                  Jika kamu merasa sakit dengan salah satu gejala COVID-19,
                  silakan hubungi pusat kesehatan untuk segera meminta bantuan.
                </Text>
                <Button
                  danger
                  onPress={() => navigation.navigate('Number')}
                  style={{marginTop: 20, marginBottom: 10, borderRadius: 4}}>
                  <Icon
                    style={{marginLeft: 20}}
                    name="md-call"
                    size={25}
                    color={colorWhitePrimary}
                  />
                  <Text style={{fontWeight: 'bold'}}>DAFTAR NOMOR</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>

          <Menu
            local={() => navigation.navigate('Local')}
            global={() => navigation.navigate('Global')}
            compare={() => navigation.navigate('Compare')}
            question={() => navigation.navigate('Question')}
          />
        </Content>
        <View
          style={{
            backgroundColor: colorWhiteSecondary,
            height: 10,
            marginTop: 30,
            marginBottom: 10,
          }}
        />
        <BolehEnggak getPsbb={() => navigation.navigate('Psbb')} />
        <Preventation />
      </ScrollView>
    </Container>
  );
};

export default Home;
