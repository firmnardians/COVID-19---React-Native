import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {
  colorWhitePrimary,
  primaryColor,
  colorWhiteSecondary,
} from '../../assets/style/color';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {Item, Content, Accordion, Spinner, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const baseURL = 'https://apibiganxxx.netlify.app/psbb.json';

class Psbb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPsbb: [],
      search: null,
    };
  }

  getData_API = () => {
    axios.get(baseURL).then((res) => {
      this.setState({
        dataPsbb: res.data,
      });
    });
  };

  componentDidMount() {
    this.getData_API();
  }

  render() {
    console.disableYellowBox = true;
    const mapData = this.state.dataPsbb
      .filter((item) => {
        if (this.state.search === null) {
          return item;
        } else if (
          item.activity.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return item;
        }
      })
      .map((items) => {
        return {
          title: `Boleh gak ${items.activity} ?`,
          content: `${items.answertypelabel} ${'\n'}${'\n'}${
            items.answercontent
          }`,
        };
      });

    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#708160"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        {this.state.dataPsbb.length === 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner color={primaryColor} />
          </View>
        ) : (
          <ScrollView
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                padding: 15,
                paddingBottom: 0,
                backgroundColor: '#708160',
              }}>
              <Text style={{color: colorWhitePrimary, fontSize: 18}}>
                Yuk cari tau hal-hal yang kamu boleh atau nggak boleh lakukan
                selama masa Pembatasan Sosial Berskala Besar (PSBB) di Jakarta!
              </Text>
            </View>
            <View
              style={{marginTop: 0, padding: 15, backgroundColor: '#708160'}}>
              <Text
                style={{
                  fontSize: 22,
                  marginBottom: 5,
                  fontWeight: 'bold',
                  color: colorWhitePrimary,
                }}>
                <Icon
                  style={{marginRight: 20}}
                  name="md-search"
                  size={20}
                  color={colorWhitePrimary}
                />{' '}
                Pencarian
              </Text>
              <Item
                style={{
                  borderRadius: 4,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderColor: colorWhitePrimary,
                  backgroundColor: colorWhitePrimary,
                }}
                regular>
                <Input
                  onChangeText={(text) => {
                    this.setState({search: text});
                  }}
                  placeholder="Aku mau cari..."
                />
              </Item>
            </View>

            <Content>
              <Accordion
                contentStyle={{
                  backgroundColor: colorWhiteSecondary,
                  borderTopWidth: 0,
                  padding: 20,
                }}
                headerStyle={{
                  padding: 20,
                  paddingLeft: 15,
                  marginTop: 10,
                  borderTopWidth: 0,
                  backgroundColor: colorWhitePrimary,
                }}
                dataArray={mapData}
              />
            </Content>
          </ScrollView>
        )}
      </>
    );
  }
}

export default Psbb;
