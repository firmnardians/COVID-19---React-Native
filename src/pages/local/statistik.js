import React, {Component} from 'react';
import axios from 'axios';
import {RefreshControl} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as dayjs from 'dayjs';
import {
  View,
  Content,
  Card,
  CardItem,
  Body,
  Grid,
  Col,
  Text,
  Spinner,
} from 'native-base';
import {
  colorWhiteSecondary,
  primaryColor,
  secondaryColor,
  colorWhitePrimary,
  colorPositif,
  colorSembuh,
  colorMeninggal,
} from '../../assets/style/color';

const baseURL = 'https://indonesia-covid-19.mathdro.id/api/';

class Statistik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meninggal: '',
      sembuh: '',
      perawatan: '',
      jumlahKasus: '',
      dailyUpdate: [],
      refreshing: false,
    };
  }

  indonesiaCovid_API = () => {
    axios.get(`${baseURL}`).then((res) => {
      this.setState({
        meninggal: res.data.meninggal,
        sembuh: res.data.sembuh,
        perawatan: res.data.perawatan,
        jumlahKasus: res.data.jumlahKasus,
        refreshing: false,
      });
    });
  };

  dailyUpdate_API = () => {
    axios.get(`${baseURL}harian`).then((res) => {
      this.setState({
        dailyUpdate: res.data.data,
        refreshing: false,
      });
    });
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.dailyUpdate_API();
    this.indonesiaCovid_API();
  };

  componentDidMount() {
    this.dailyUpdate_API();
    this.indonesiaCovid_API();
  }

  render() {
    const {dailyUpdate} = this.state;

    const mapDailyUpdate = [...dailyUpdate].reverse().map((item) => {
      const getDateDaily = item.tanggal;
      const unixToDate = dayjs.unix(getDateDaily / 1000).format('DD MMMM YYYY');

      const persentasePerawatan = item.persentasePasiendalamPerawatan;
      const fixPerawatan =
        persentasePerawatan === null ? '0' : persentasePerawatan.toFixed(0);

      const persentaseMeninggal = item.persentasePasienMeninggal;
      const fixMeninggal =
        persentaseMeninggal === null ? '0' : persentaseMeninggal.toFixed(0);

      const persentaseSembuh = item.persentasePasienSembuh;
      const fixSembuh =
        persentaseSembuh === null ? '0' : persentaseSembuh.toFixed(0);
      return (
        <Card transparent style={{marginBottom: 10}} key={item.fid}>
          <CardItem style={{borderRadius: 6, backgroundColor: '#f3f3f4'}}>
            <Body>
              <View
                style={{
                  justifyContent: 'space-between',
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: '#8c8c8c',
                    marginBottom: 10,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  {unixToDate}
                </Text>
                {item.jumlahpasiendalamperawatan === null ? (
                  <Text
                    style={{
                      color: '#8c8c8c',
                      marginBottom: 10,
                      marginTop: 10,
                    }}>
                    {' '}
                    - Belum ada informasi
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>

              <Grid style={{marginTop: 10}}>
                <Col>
                  <Text
                    style={{
                      color: colorPositif,
                      textAlign: 'center',
                    }}>
                    {item.jumlahKasusBaruperHari === null
                      ? '0'
                      : item.jumlahKasusBaruperHari}
                  </Text>
                  <Text
                    style={{
                      color: colorPositif,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Positif
                  </Text>
                </Col>

                <Col>
                  <Text
                    style={{
                      color: colorSembuh,
                      textAlign: 'center',
                    }}>
                    {item.jumlahKasusSembuhperHari === null
                      ? '0'
                      : item.jumlahKasusSembuhperHari}
                  </Text>
                  <Text
                    style={{
                      color: colorSembuh,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Sembuh
                  </Text>
                </Col>

                <Col>
                  <Text
                    style={{
                      color: colorMeninggal,
                      textAlign: 'center',
                    }}>
                    {item.jumlahKasusMeninggalperHari === null
                      ? '0'
                      : item.jumlahKasusMeninggalperHari}
                  </Text>
                  <Text
                    style={{
                      color: colorMeninggal,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Meninggal
                  </Text>
                </Col>
              </Grid>

              <Grid style={{marginTop: 20, marginBottom: 10}}>
                <Col>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                    }}>
                    {`${fixPerawatan}%`}
                  </Text>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Dirawat
                  </Text>
                </Col>

                <Col>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                    }}>
                    {`${fixSembuh}%`}
                  </Text>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Sembuh
                  </Text>
                </Col>

                <Col>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                    }}>
                    {`${fixMeninggal}%`}
                  </Text>
                  <Text
                    style={{
                      color: '#a09e9e',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Meninggal
                  </Text>
                </Col>
              </Grid>
            </Body>
          </CardItem>
        </Card>
      );
    });

    return (
      <>
        {dailyUpdate.length === 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner color={primaryColor} />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }>
            <Content style={{margin: 20}}>
              <View style={{marginBottom: 10}}>
                <Text style={titleApp}>Total kasus</Text>
              </View>

              <Body>
                <Grid>
                  <Col>
                    <View style={cardGraph}>
                      <Text
                        style={{
                          color: colorWhitePrimary,
                          fontWeight: 'bold',
                          fontSize: 23,
                          textAlign: 'center',
                        }}>
                        {this.state.jumlahKasus}
                      </Text>
                      <Text style={{color: colorWhitePrimary}}>
                        Terkonfirmasi
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={cardGraph}>
                      <Text
                        style={{
                          color: colorWhitePrimary,
                          fontWeight: 'bold',
                          fontSize: 23,
                          textAlign: 'center',
                        }}>
                        {this.state.perawatan}
                      </Text>
                      <Text style={{color: colorWhitePrimary}}>
                        Dalam Perawatan
                      </Text>
                    </View>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                    <View style={cardGraph}>
                      <Text
                        style={{
                          color: colorWhitePrimary,
                          fontWeight: 'bold',
                          fontSize: 23,
                          textAlign: 'center',
                        }}>
                        {this.state.sembuh}
                      </Text>
                      <Text style={{color: colorWhitePrimary}}>Sembuh</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={cardGraph}>
                      <Text
                        style={{
                          color: colorWhitePrimary,
                          fontWeight: 'bold',
                          fontSize: 23,
                          textAlign: 'center',
                        }}>
                        {this.state.meninggal}
                      </Text>
                      <Text style={{color: colorWhitePrimary}}>Meninggal</Text>
                    </View>
                  </Col>
                </Grid>
              </Body>
            </Content>

            <View
              style={{
                backgroundColor: colorWhiteSecondary,
                height: 10,
                marginTop: 0,
                marginBottom: 10,
              }}
            />

            <Content style={{margin: 20}}>
              <View style={{marginBottom: 10}}>
                <Text style={titleApp}>Kasus harian</Text>
                <Text>Data harian yang terjadi di Indonesia.</Text>
              </View>

              {mapDailyUpdate}
            </Content>
          </ScrollView>
        )}
      </>
    );
  }
}

const cardGraph = {
  margin: 5,
  height: 100,
  borderRadius: 6,
  backgroundColor: secondaryColor,
  justifyContent: 'center',
  alignItems: 'center',
};

const titleApp = {
  fontSize: 21,
  fontWeight: 'bold',
  textAlign: 'left',
};

export default Statistik;
