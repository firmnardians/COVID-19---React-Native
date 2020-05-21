import React, {Component} from 'react';
import {
  Text,
  Card,
  CardItem,
  Body,
  Grid,
  Col,
  View,
  Spinner,
  Content,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import Flag from 'react-native-flags';
import axios from 'axios';
import {
  colorPositif,
  colorMeninggal,
  primaryColor,
  colorSembuh,
} from '../../assets/style/color';

const baseURL = 'https://api.covid19api.com/summary';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: [],
    };
  }

  getCountryList_API = async () => {
    axios
      .get(`${baseURL}`)
      .then((res) => {
        this.setState({
          countryList: res.data.Countries,
        });
      })
      .catch(() => {
        alert('Maaf yah, Server penuh nih');
      });
  };

  componentDidMount() {
    this.getCountryList_API();
  }

  render() {
    const mapCountryList = this.state.countryList
      .slice(1)
      .map((item, index) => {
        return (
          <Card key={index}>
            <CardItem>
              <Body>
                <Grid>
                  <Flag code={item.CountryCode} size={32} />
                  <Text style={titleCountry}>{item.Country}</Text>
                </Grid>

                <Grid style={{marginTop: 20, paddingBottom: 10}}>
                  <Col>
                    <Text
                      style={{
                        ...dailyTextStyle,
                        fontSize: 18,
                        color: colorPositif,
                      }}>
                      {item.TotalConfirmed}
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
                        color: colorSembuh,
                      }}>
                      {item.TotalRecovered}
                    </Text>
                    <Text style={{...dailyTextStyle, color: colorSembuh}}>
                      Sembuh
                    </Text>
                  </Col>

                  <Col>
                    <Text
                      style={{
                        ...dailyTextStyle,
                        fontSize: 18,
                        color: colorMeninggal,
                      }}>
                      {item.TotalDeaths}
                    </Text>
                    <Text style={{...dailyTextStyle, color: colorMeninggal}}>
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
        {this.state.countryList.length === 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner color={primaryColor} />
          </View>
        ) : (
          <ScrollView>
            <Content style={{padding: 10}}>{mapCountryList}</Content>
          </ScrollView>
        )}
      </>
    );
  }
}

const dailyTextStyle = {textAlign: 'center', fontWeight: 'bold'};
const titleCountry = {
  fontWeight: 'bold',
  fontSize: 18,
  marginLeft: 10,
  marginTop: 5,
};

export default State;
