import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Picker,
  Content,
  Grid,
  Col,
  Card,
  CardItem,
  Left,
  Body,
  Header,
  Right,
  Title,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {StatusBar, ImageBackground} from 'react-native';
import Flag from 'react-native-flags';
import RBSheet from 'react-native-raw-bottom-sheet';
import axios from 'axios';
import {
  colorWhitePrimary,
  colorWhiteSecondary,
  primaryColor,
  colorBlackPrimary,
} from '../../assets/style/color';
import BottomSheetCompare from '../../components/bottomSheet/bottomSheetCompare';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const baseURL = 'https://covid19.mathdro.id/api';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCompare: true,
      countryList: [],
      selected1: 'Indonesia',
      selected2: 'Malaysia',
      iso_one: 'ID',
      iso_two: 'MY',
      country_one: {
        confirmed: '',
        recovered: '',
        deaths: '',
        flag: '',
      },
      country_two: {
        confirmed: '',
        recovered: '',
        deaths: '',
        flag: '',
      },
    };
  }

  getCountry_API = () => {
    axios.get(`${baseURL}/countries`).then((res) => {
      this.setState({
        countryList: res.data.countries,
      });
    });
  };

  getDetailCountry1_API = () => {
    axios.get(`${baseURL}/countries/${this.state.selected1}`).then((res) => {
      this.setState({
        country_one: {
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        },
      });
    });
  };

  getDetailCountry2_API = () => {
    axios.get(`${baseURL}/countries/${this.state.selected2}`).then((res) => {
      this.setState({
        country_two: {
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        },
      });
    });
  };

  getFlagCountry1_API = () => {
    axios.get(`${baseURL}/countries`).then((res) => {
      // console.log(res.data.countries[this.state.country_one.flag].iso2);
      this.setState({
        iso_one: res.data.countries[this.state.country_one.flag].iso2,
      });
    });
  };

  getFlagCountry2_API = () => {
    axios.get(`${baseURL}/countries`).then((res) => {
      // console.log(res.data.countries[this.state.country_two.flag].iso2);
      this.setState({
        iso_two: res.data.countries[this.state.country_two.flag].iso2,
      });
    });
  };

  handleChange1 = (value, index) => {
    this.setState(
      {
        selected1: value,
        country_one: {
          flag: index,
        },
      },
      () => this.getFlagCountry1_API(),
    );
  };

  handleChange2 = (value, index) => {
    this.setState(
      {
        selected2: value,
        country_two: {
          flag: index,
        },
      },
      () => this.getFlagCountry2_API(),
    );
  };

  startCompare = () => {
    // alert('hello');
    this.setState({
      firstCompare: false,
    });
    this.getDetailCountry1_API(),
      this.getDetailCountry2_API(),
      this.RBSheet.close();
  };

  componentDidMount() {
    this.getCountry_API();
  }

  render() {
    console.disableYellowBox = true;

    const mapCountryList = this.state.countryList.map((item) => {
      return (
        <Picker.Item key={item.iso3} label={item.name} value={item.name} />
      );
    });

    // Terkonfirmasi
    let logicConfirmed;
    if (this.state.country_one.confirmed >= this.state.country_two.confirmed) {
      logicConfirmed = `Di Negara ${this.state.selected1} orang yang terkonfirmasi positif terkena virus corona lebih banyak dibanding negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.confirmed <= this.state.country_two.confirmed) {
      logicConfirmed = `Di Negara ${this.state.selected1} orang yang terkonfirmasi positif terkena virus corona lebih sedikit dibanding negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.confirmed === this.state.country_two.confirmed) {
      logicConfirmed = `Negara ${this.state.selected1} dan negara ${this.state.selected2} jumlah orang yang terkonfirmasi positif akibat terkena virus corona sama yaitu ${this.state.country_one.confirmed}.`;
    }

    if (
      this.state.country_one.confirmed === 0 &&
      this.state.country_two.confirmed === 0
    ) {
      logicConfirmed = `Hebat, tidak ada masyarakat yang terkonfirmasi terkena virus corona di dua negara tersebut.`;
    }

    // Sembuh
    let logicRecovered;
    if (this.state.country_one.recovered >= this.state.country_two.recovered) {
      logicRecovered = `Jumlah orang yang sembuh akibat virus corona di negara ${this.state.selected1} lebih banyak dibanding negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.recovered <= this.state.country_two.recovered) {
      logicRecovered = `Jumlah orang yang sembuh akibat virus corona di negara ${this.state.selected1} lebih sedikit dibanding negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.recovered === this.state.country_two.recovered) {
      logicRecovered = `Negara ${this.state.selected1} dan negara ${this.state.selected2} jumlah orang yang sembuh akibat terkena virus corona sama yaitu ${this.state.country_one.recovered}.`;
    }

    if (
      this.state.country_one.recovered === 0 &&
      this.state.country_two.recovered === 0
    ) {
      logicRecovered = `Belum ada orang yang sembuh akibat virus corona`;
    }

    // Meninggal
    let logicDeath;
    if (this.state.country_one.deaths >= this.state.country_two.deaths) {
      logicDeath = `Di negara ${this.state.selected1} lebih banyak orang yang meninggal akibat virus corona dibanding negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.deaths <= this.state.country_two.deaths) {
      logicDeath = `Jumlah orang yang meninggal akibat virus corona di negara ${this.state.selected1} lebih sedikit daripada di negara ${this.state.selected2}.`;
    }

    if (this.state.country_one.deaths === this.state.country_two.deaths) {
      logicDeath = `Negara ${this.state.selected1} dan negara ${this.state.selected2} jumlah orang yang meninggal akibat virus corona sama yaitu ${this.state.country_one.deaths}.`;
    }

    if (
      this.state.country_one.deaths === 0 &&
      this.state.country_two.deaths === 0
    ) {
      logicDeath = `Selamat ya, tidak ada korban yang meninggal dari dua negara tersebut akibat virus corona.`;
    }

    return (
      <>
        {this.state.firstCompare ? (
          <StatusBar translucent backgroundColor="transparent" />
        ) : (
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor={colorWhitePrimary}
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        )}

        {this.state.firstCompare ? (
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover'}}
            source={require('../../assets/images/resource/bgimage.png')}>
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                top: 60,
                backgroundColor: colorWhitePrimary,
                left: 30,
                height: 50,
                width: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Icon
                  name="md-arrow-round-back"
                  size={30}
                  color={colorBlackPrimary}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: 30,
              }}>
              <View style={{marginBottom: 0, marginBottom: 30}}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 32,
                    color: colorWhitePrimary,
                  }}>
                  Cara mudah untuk melihat jumlah persentase dari dua negara
                  berbeda.
                </Text>
              </View>

              <Button
                onPress={() => this.RBSheet.open()}
                style={{
                  borderRadius: 4,
                  height: 54,
                  backgroundColor: colorWhitePrimary,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colorBlackPrimary,
                    fontSize: 18,
                  }}>
                  Mulai Compare
                </Text>
              </Button>
              <RBSheet
                ref={(ref) => {
                  this.RBSheet = ref;
                }}
                height={400}
                closeOnDragDown={true}
                customStyles={bottomSheetStyle}>
                <BottomSheetCompare
                  onChange1={this.handleChange1}
                  onChange2={this.handleChange2}
                  selected1={this.state.selected1}
                  selected2={this.state.selected2}
                  submit={this.startCompare}
                  mapCountryList={mapCountryList}
                />
              </RBSheet>
            </View>
          </ImageBackground>
        ) : (
          <>
            <Header
              androidStatusBarColor={colorBlackPrimary}
              style={{backgroundColor: colorWhitePrimary}}
              noLeft>
              <Left />
              <TouchableOpacity
                style={{paddingLeft: 10, paddingRight: 20, paddingTop: 12}}
                onPress={() => this.props.navigation.goBack()}>
                <Icon
                  name="md-arrow-back"
                  size={30}
                  color={colorBlackPrimary}
                />
              </TouchableOpacity>

              <Body>
                <Title
                  style={{
                    fontWeight: 'bold',
                    fontSize: 21,
                    color: colorBlackPrimary,
                  }}>
                  Hasil Compare
                </Title>
              </Body>
            </Header>
            <ScrollView style={{flex: 1, backgroundColor: colorWhitePrimary}}>
              <Content style={{margin: 10}}>
                <Grid>
                  <Col>
                    <View style={{marginRight: 5}}>
                      <Text style={titleFlagCompare}>
                        {this.state.selected1}
                      </Text>
                      <View style={imageFlagCompare}>
                        <Flag code={this.state.iso_one} size={64} />
                      </View>
                    </View>
                  </Col>

                  <Col>
                    <View style={{marginLeft: 5}}>
                      <Text style={titleFlagCompare}>
                        {this.state.selected2}
                      </Text>
                      <View style={imageFlagCompare}>
                        <Flag code={this.state.iso_two} size={64} />
                      </View>
                    </View>
                  </Col>
                </Grid>

                <Grid style={{marginTop: 20}}>
                  <Col>
                    <View style={{marginRight: 10}}>
                      <Text style={titleGraphCompare}>Terkonfirmasi</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_one.confirmed}
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{marginLeft: 10}}>
                      <Text style={titleGraphCompare}>Terkonfirmasi</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_two.confirmed}
                      </Text>
                    </View>
                  </Col>
                </Grid>

                <Grid style={{marginTop: 20}}>
                  <Col>
                    <View style={{marginRight: 10}}>
                      <Text style={titleGraphCompare}>Sembuh</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_one.recovered}
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{marginLeft: 10}}>
                      <Text style={titleGraphCompare}>Sembuh</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_two.recovered}
                      </Text>
                    </View>
                  </Col>
                </Grid>

                <Grid style={{marginTop: 20}}>
                  <Col>
                    <View style={{marginRight: 10}}>
                      <Text style={titleGraphCompare}>Meninggal</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_one.deaths}
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{marginLeft: 10}}>
                      <Text style={titleGraphCompare}>Meninggal</Text>
                      <Text style={numberGraphCompare}>
                        {this.state.country_two.deaths}
                      </Text>
                    </View>
                  </Col>
                </Grid>
              </Content>
              <View
                style={{
                  backgroundColor: colorWhiteSecondary,
                  height: 10,
                  marginTop: 30,
                  marginBottom: 10,
                }}
              />
              <Content>
                <View style={{marginLeft: 10, marginBottom: 10}}>
                  <Text
                    style={{
                      marginBottom: 0,
                      marginTop: 21,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    Data compare
                  </Text>
                  <Text>Membandingkan hasil persentase dari dua negara.</Text>
                </View>

                <Content style={{margin: 10}}>
                  <Card style={{padding: 10}}>
                    <CardItem>
                      <Body>
                        <Text>{logicConfirmed}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={{padding: 10}}>
                    <CardItem>
                      <Body>
                        <Text>{logicRecovered}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={{padding: 10}}>
                    <CardItem>
                      <Body>
                        <Text>{logicDeath}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Button
                    onPress={() => this.RBSheet.open()}
                    style={{
                      height: 55,
                      marginTop: 10,
                      justifyContent: 'center',
                      borderRadius: 6,
                      backgroundColor: primaryColor,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      Compare Ulang
                    </Text>
                  </Button>
                  <RBSheet
                    ref={(ref) => {
                      this.RBSheet = ref;
                    }}
                    height={400}
                    closeOnDragDown={true}
                    customStyles={bottomSheetStyleAgain}>
                    <BottomSheetCompare
                      onChange1={this.handleChange1}
                      onChange2={this.handleChange2}
                      selected1={this.state.selected1}
                      selected2={this.state.selected2}
                      submit={this.startCompare}
                      mapCountryList={mapCountryList}
                    />
                  </RBSheet>
                </Content>
              </Content>
            </ScrollView>
          </>
        )}
      </>
    );
  }
}

const titleGraphCompare = {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#586069',
  textAlign: 'center',
};

const numberGraphCompare = {
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
};

const titleFlagCompare = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  marginBottom: 5,
};

const bottomSheetStyle = {
  wrapper: {
    backgroundColor: '#181818a6',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  container: {
    padding: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
};

const bottomSheetStyleAgain = {
  wrapper: {
    backgroundColor: '#000000',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  container: {
    padding: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
};

const imageFlagCompare = {
  marginTop: 0,
  marginBottom: 5,
  backgroundColor: colorWhitePrimary,
  justifyContent: 'center',
  alignItems: 'center',
};

export default Compare;
