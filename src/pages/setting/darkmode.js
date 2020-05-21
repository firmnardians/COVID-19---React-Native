import React, {Component} from 'react';
import {
  Container,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

class DarkMode extends Component {
  state = {
    darkmode: 'light',
  };
  constructor(props) {
    super(props);
    this.getData();
  }

  handleChangeLight = async () => {
    try {
      this.setState({
        darkmode: 'light',
      });
      await AsyncStorage.setItem('darkmode', 'light');
    } catch (err) {
      console.log(err);
    }
  };

  handleChangeDark = async () => {
    try {
      this.setState({
        darkmode: 'dark',
      });

      await AsyncStorage.setItem('darkmode', 'dark');
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const darkmode = await AsyncStorage.getItem('darkmode');
      if (darkmode !== null) {
        this.setState({
          darkmode: darkmode,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <ListItem onPress={() => this.handleChangeLight()}>
            <Left>
              <Text>Light</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.darkmode === 'light' ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.handleChangeDark()}>
            <Left>
              <Text>Dark</Text>
            </Left>
            <Right>
              <Radio selected={this.state.darkmode === 'dark' ? true : false} />
            </Right>
          </ListItem>
        </Content>
        <Text> {this.state.darkmode}</Text>
      </Container>
    );
  }
}

export default DarkMode;
