import React, {Component} from 'react';
import {RefreshControl} from 'react-native';
import {
  Body,
  Spinner,
  Text,
  Card,
  CardItem,
  Content,
  Grid,
  Col,
  View,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {primaryColor} from '../../assets/style/color';

class Provinsi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvinsi: [],
      refreshing: false,
    };
  }

  getProvinsi_API = () => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then((res) => {
        this.setState({
          dataProvinsi: res.data.data,
          refreshing: false,
        });
      });
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.getProvinsi_API();
  };

  componentDidMount() {
    this.getProvinsi_API();
  }
  render() {
    const mapProvinsi = this.state.dataProvinsi.map((item) => {
      return (
        <Card
          key={item.fid}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            margin: 10,
          }}>
          <CardItem>
            <Body>
              <Text style={{fontWeight: 'bold'}}>{item.provinsi}</Text>
              <Grid style={{marginTop: 20}}>
                <Col>
                  <Text style={{textAlign: 'center', color: '#ffa41b'}}>
                    {item.kasusPosi}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#ffa41b',
                      fontWeight: 'bold',
                    }}>
                    Positif
                  </Text>
                </Col>
                <Col>
                  <Text style={{textAlign: 'center', color: '#679b9b'}}>
                    {item.kasusSemb}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#679b9b',
                      fontWeight: 'bold',
                    }}>
                    Sembuh
                  </Text>
                </Col>
                <Col>
                  <Text style={{textAlign: 'center', color: '#d8345f'}}>
                    {item.kasusMeni}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#d8345f',
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
        {this.state.dataProvinsi.length > 0 ? (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }>
            <Content style={{margin: 10}}>{mapProvinsi}</Content>
          </ScrollView>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner color={primaryColor} />
          </View>
        )}
      </>
    );
  }
}

export default Provinsi;
