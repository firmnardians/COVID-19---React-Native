import React, {Component} from 'react';
import {RefreshControl} from 'react-native';
import {
  Text,
  Content,
  View,
  Grid,
  Col,
  Spinner,
  Card,
  CardItem,
  Body,
} from 'native-base';
import dayjs from 'dayjs';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {
  colorPositif,
  colorSembuh,
  colorMeninggal,
  primaryColor,
  colorWhitePrimary,
  colorWhiteSecondary,
} from '../../assets/style/color';

const baseURL = 'https://covid19.mathdro.id/api';

class GlobalGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      confirmed: '',
      recovered: '',
      deaths: '',
      dailyUpdate: [],
    };
  }

  getDataStatistik_API = async () => {
    axios.get(baseURL).then((res) => {
      this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
        refreshing: false,
      });
    });
  };

  dailyUpdate_API = async () => {
    axios.get(`${baseURL}/daily`).then((res) => {
      this.setState({
        dailyUpdate: res.data,
        refreshing: false,
      });
    });
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.getDataStatistik_API();
    this.dailyUpdate_API();
  };

  componentDidMount() {
    this.getDataStatistik_API();
    this.dailyUpdate_API();
  }

  render() {
    const mapDaily = [...this.state.dailyUpdate]
      .reverse()
      .map((item, index) => {
        const getDate = item.reportDate;
        const fixDate = dayjs(getDate).format('DD MMMM YYYY');

        return (
          <Card
            key={index}
            transparent
            style={{
              marginTop: 15,
              borderRadius: 6,
            }}>
            <CardItem style={{borderRadius: 6, backgroundColor: '#f3f3f4'}}>
              <Body>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#8c8c8c',
                    fontSize: 14,
                  }}>
                  {fixDate}
                </Text>
                <Grid style={{marginTop: 15, paddingBottom: 10}}>
                  <Col>
                    <Text
                      style={{
                        ...dailyTextStyle,
                        fontSize: 18,
                        color: colorPositif,
                      }}>
                      {item.confirmed.total}
                    </Text>
                    <Text style={{...dailyTextStyle, color: colorPositif}}>
                      Positif
                    </Text>
                  </Col>

                  <Col>
                    <Text
                      style={{
                        ...dailyTextStyle,
                        fontSize: 18,
                        color: colorMeninggal,
                      }}>
                      {item.deaths.total}
                    </Text>
                    <Text style={{...dailyTextStyle, color: colorMeninggal}}>
                      Meninggal
                    </Text>
                  </Col>
                </Grid>
                <Text style={{color: '#a09e9e', marginTop: 10}}>
                  Total {item.mainlandChina} kasus di China dan{' '}
                  {item.otherLocations} di negara lain.
                </Text>
              </Body>
            </CardItem>
          </Card>
        );
      });
    return (
      <>
        {this.state.dailyUpdate.length === 0 ? (
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
            <Content style={{padding: 20}}>
              <View style={{marginBottom: 20}}>
                <Text style={titleApp}>Kasus dunia</Text>
                <Text>Jumlah dari seluruh dunia.</Text>
              </View>
              <Grid>
                <Col>
                  <View style={contentCount}>
                    <Text style={countCovid}>{this.state.confirmed}</Text>
                    <Text style={textCovid}>Terkonfirmasi Positif</Text>
                  </View>
                </Col>
              </Grid>
              <Grid style={{marginTop: 10}}>
                <Col style={{marginRight: 5}}>
                  <View
                    style={{...contentGridCount, backgroundColor: colorSembuh}}>
                    <Text style={countCovid}>{this.state.recovered}</Text>
                    <Text style={textCovidSmall}>Sembuh</Text>
                  </View>
                </Col>
                <Col style={{marginLeft: 5}}>
                  <View
                    style={{
                      ...contentGridCount,
                      backgroundColor: colorMeninggal,
                    }}>
                    <Text style={countCovid}>{this.state.deaths}</Text>
                    <Text style={textCovidSmall}>Meninggal</Text>
                  </View>
                </Col>
              </Grid>
            </Content>

            <View
              style={{
                backgroundColor: colorWhiteSecondary,
                height: 10,
                marginTop: 0,
                marginBottom: 10,
              }}
            />

            <Content style={{padding: 20}}>
              <View style={{marginBottom: 20}}>
                <Text style={titleApp}>Kasus terbaru</Text>
                <Text>Kasus harian yang terjadi di Dunia.</Text>

                {mapDaily}
              </View>
            </Content>
          </ScrollView>
        )}
      </>
    );
  }
}
const dailyTextStyle = {textAlign: 'center', fontWeight: 'bold'};

const contentCount = {
  backgroundColor: colorPositif,
  height: 120,
  borderRadius: 6,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
};

const contentGridCount = {
  height: 100,
  borderRadius: 6,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
};

const countCovid = {
  fontSize: 26,
  fontWeight: 'bold',
  color: colorWhitePrimary,
};

const textCovid = {
  fontSize: 22,
  color: colorWhitePrimary,
};

const textCovidSmall = {
  fontSize: 16,
  color: colorWhitePrimary,
};

const titleApp = {
  fontSize: 21,
  fontWeight: 'bold',
  textAlign: 'left',
};

export default GlobalGraph;
