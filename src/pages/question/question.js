import React, {Component} from 'react';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Body,
  Button,
} from 'native-base';
import {StatusBar, Text} from 'react-native';
import {colorWhitePrimary, primaryColor} from '../../assets/style/color';
import RBSheet from 'react-native-raw-bottom-sheet';
import {dataQuestion} from './dataQuestion';

const cards = dataQuestion;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlay: true,
    };
  }

  bottomSheetSubmit = () => {
    this.setState(
      {
        firstPlay: !this.state.firstPlay,
      },
      () => this.RBSheet.close(),
    );
  };

  componentDidMount() {
    this.RBSheet.open();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <>
        {this.state.firstPlay === true ? (
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#181818a6"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        ) : (
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor={colorWhitePrimary}
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        )}

        <Container>
          <View style={{padding: 20}}>
            <DeckSwiper
              dataSource={cards}
              looping={true}
              renderItem={(item) => (
                <Card style={{elevation: 3, minHeight: 400}}>
                  <CardItem>
                    <Body>
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {item.text}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {item.question}
                    </Text>
                  </CardItem>
                  <CardItem>
                    <Text style={{fontSize: 16}}>{item.answer}</Text>
                  </CardItem>
                </Card>
              )}
            />
          </View>

          <View>
            <RBSheet
              ref={(ref) => {
                this.RBSheet = ref;
              }}
              height={300}
              closeOnPressMask={false}
              closeOnPressBack={false}
              customStyles={{
                wrapper: {
                  backgroundColor: '#181818a6',
                },
                container: {
                  padding: 0,
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                },
              }}>
              <View style={{flex: 1}}>
                <View style={{padding: 20, paddingTop: 30}}>
                  <View style={{marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>
                      Cara penggunaan
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 16}}>
                      Geser pertanyaan ke kanan dan ke kiri untuk melihat
                      pertanyaan berikutnya.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <Button
                    style={{
                      height: 60,
                      backgroundColor: primaryColor,
                      fontWeight: 'bold',
                      justifyContent: 'center',
                    }}
                    onPress={() => this.bottomSheetSubmit()}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: colorWhitePrimary,
                        fontSize: 16,
                      }}>
                      OKE SAYA PAHAM
                    </Text>
                  </Button>
                </View>
              </View>
            </RBSheet>
          </View>
        </Container>
      </>
    );
  }
}

export default Question;
