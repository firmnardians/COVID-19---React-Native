import React, {Component} from 'react';
import {View, Button} from 'native-base';
import {StatusBar, Text, Platform, Image, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {primaryColor, colorWhitePrimary} from '../../assets/style/color';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getDistance, convertDistance} from 'geolib';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: null,
        longitudeDelta: null,
      },
      marketDetail: {
        title: '',
        address: '',
        phone: '',
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      },
    };
  }

  getMarker_API = () => {
    axios.get('https://apibiganxxx.netlify.app/rumahsakit.json').then((res) => {
      this.setState({
        markers: res.data,
      });
    });
  };

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          initialPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.322,
            longitudeDelta: 0.121,
          },
        });
      },
      (err) => console.log(err),
    );
  };

  buttonCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.map.animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.122,
          longitudeDelta: 0.121,
        });
      },
      () =>
        Alert.alert(
          'Lokasi tidak ditemukan',
          'Lokasi kamu tidak ditemukan nih, pastikan GPS nya sudah di aktifkan yah.',
          [{text: 'OKEY'}],
          {
            cancelable: false,
          },
        ),
    );
  };

  openDetailLocation = (marker) => {
    const {title, coordinates, phone, address} = marker;
    console.log(coordinates);
    setTimeout(() => {
      this.setState(
        {
          marketDetail: {
            title: title,
            phone: phone,
            address: address,
            coordinates: coordinates,
          },
        },
        () => this.RBSheet.open(),
      );
    }, 100);
  };

  componentDidMount() {
    this.getMarker_API();
    this.locateCurrentPosition();
    this.requestLocationPermission();
  }

  render() {
    console.disableYellowBox = true;
    // console.log(`dari state`, this.state.initialPosition.longitude);
    const {longitude, latitude} = this.state.marketDetail.coordinates;
    const dist = getDistance(
      {
        latitude: this.state.initialPosition.latitude,
        longitude: this.state.initialPosition.longitude,
      },
      {latitude: longitude, longitude: latitude},
    );
    const fixedMtoKm = dist / 1000.0;

    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={primaryColor}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        {this.state.initialPosition.longitude === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 30,
              alignItems: 'center',
              backgroundColor: '#fffaf7',
            }}>
            <Image
              style={{width: 280, height: 220}}
              source={require('../../assets/images/resource/explore.jpg')}
            />
            <View>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20}}>
                Sepertinya kita tersesat
              </Text>
              <Text style={{marginTop: 0, fontSize: 16}}>
                Nyalain dulu yuk GPS nya, biar bisa tau lokasi kamu saat ini.
              </Text>
            </View>

            <Button
              style={{
                padding: 10,
                paddingLeft: 30,
                paddingTop: 10,
                height: 50,
                paddingBottom: 10,
                paddingRight: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                backgroundColor: primaryColor,
                borderRadius: 4,
              }}
              onPress={() => this.locateCurrentPosition()}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',

                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                COBA LAGI
              </Text>
            </Button>
          </View>
        ) : (
          <View style={container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              ref={(map) => {
                this.map = map;
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              style={mapView}
              initialRegion={this.state.initialPosition}>
              {this.state.markers.map((marker, index) => (
                <MapView.Marker
                  key={index}
                  coordinate={marker.coordinates}
                  title={marker.title}
                  onPress={() => this.openDetailLocation(marker)}
                />
              ))}
            </MapView>

            <Button
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                position: 'absolute',
                right: 0,
                backgroundColor: primaryColor,
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 5,
              }}
              onPress={() => this.buttonCurrentPosition()}>
              <Icon
                style={{marginLeft: 0}}
                name="md-locate"
                size={25}
                color={colorWhitePrimary}
              />
            </Button>

            <RBSheet
              ref={(ref) => {
                this.RBSheet = ref;
              }}
              height={350}
              closeOnDragDown={true}
              animationType="fade"
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                container: {
                  padding: 0,
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                },
              }}>
              <ScrollView>
                <View style={{flex: 1}}>
                  <View style={{padding: 20, paddingTop: 30}}>
                    <View style={{marginBottom: 10}}>
                      <Text style={{fontWeight: 'bold', fontSize: 24}}>
                        {this.state.marketDetail.title}
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 16}}>
                        Perkiraan jarak dari rumah kamu ke rumah sakit ini
                        sekitar {`${convertDistance(dist, 'm')} Meter.`}
                      </Text>
                      <View style={{marginTop: 20}}>
                        <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                          Detail:
                        </Text>

                        <View>
                          <Text
                            style={{
                              fontSize: 17,
                            }}>
                            {this.state.marketDetail.phone}
                          </Text>
                          <Text
                            style={{
                              fontSize: 17,
                            }}>
                            {this.state.marketDetail.address}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </RBSheet>
          </View>
        )}
      </>
    );
  }
}

const container = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  justifyContent: 'flex-end',
};

const mapView = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
};

export default Maps;
