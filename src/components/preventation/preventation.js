import React from 'react';
import {Content, Card, CardItem, Text, Grid, Col, View} from 'native-base';

const Preventation = () => {
  return (
    <Content style={{margin: 10}}>
      <View style={{marginLeft: 5, marginBottom: 10}}>
        <Text
          style={{
            marginBottom: 0,
            marginTop: 21,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Pencegahan
        </Text>
        <Text>Beberapa cara menghindari virus corona.</Text>
      </View>
      <Grid style={{marginBottom: 10}}>
        <Col style={{marginRight: 5}}>
          <Card>
            <CardItem cardBody>
              <View
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  backgroundColor: '#fa744f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Cuci
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Tangan
                </Text>
              </View>
            </CardItem>
            <CardItem style={{height: 90}}>
              <Text style={{fontWeight: 'bold'}}>
                Rajin mencuci tangan dengan sabun.
              </Text>
            </CardItem>
          </Card>
        </Col>
        <Col style={{marginLeft: 5}}>
          <Card>
            <CardItem cardBody>
              <View
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  backgroundColor: '#937d14',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Jaga
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Jarak
                </Text>
              </View>
            </CardItem>
            <CardItem style={{height: 90}}>
              <Text style={{fontWeight: 'bold'}}>
                Selalu jaga jarak dan hindari keramaian.
              </Text>
            </CardItem>
          </Card>
        </Col>
      </Grid>

      <Grid style={{marginBottom: 10}}>
        <Col style={{marginRight: 5}}>
          <Card>
            <CardItem cardBody>
              <View
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  backgroundColor: '#16817a',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Pakai
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Masker
                </Text>
              </View>
            </CardItem>
            <CardItem style={{height: 90}}>
              <Text style={{fontWeight: 'bold'}}>
                Gunakan masker jika pergi keluar rumah.
              </Text>
            </CardItem>
          </Card>
        </Col>
        <Col style={{marginLeft: 5}}>
          <Card>
            <CardItem cardBody>
              <View
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  backgroundColor: '#4d4c7d',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Minum
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 32, color: '#fff'}}>
                  Vitamin
                </Text>
              </View>
            </CardItem>
            <CardItem style={{height: 90}}>
              <Text style={{fontWeight: 'bold'}}>
                Konsumsi vitamin C untuk menjaga daya tahan tubuh.
              </Text>
            </CardItem>
          </Card>
        </Col>
      </Grid>
    </Content>
  );
};

export default Preventation;
