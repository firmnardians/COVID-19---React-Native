import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Home,
  Splash,
  Maps,
  Local,
  Global,
  Number,
  Compare,
  Setting,
  Question,
  Psbb,
  About,
  Donation,
  DarkMode,
} from '../pages/pages';
import {primaryColor, thirdColor} from '../assets/style/color';

const HomeStack = createStackNavigator();
const MapsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Covid"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen
        name="Rumah Sakit"
        options={{
          title: 'Rumah Sakit',
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Maps}
      />
    </MapsStack.Navigator>
  );
};

const TabApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primaryColor,
        swipeEnabled: true,
        animationEnabled: true,
        inactiveTintColor: thirdColor,
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 0,
        },
        style: {
          height: 60,
          paddingTop: 8,
          paddingBottom: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <Icon name="md-home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rumah"
        component={MapsStackScreen}
        options={{
          tabBarLabel: 'Rumah Sakit',
          tabBarIcon: ({color}) => (
            <Icon name="md-map" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Local"
        component={Local}
        options={{
          title: 'Lokal Indonesia',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Global"
        component={Global}
        options={{
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Number"
        component={Number}
        options={{
          title: 'Daftar Nomor',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={{
          gestureEnabled: true,
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Informasi',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="Psbb"
        component={Psbb}
        options={{
          title: 'Boleh Enggak',
          gestureEnabled: true,
          animationEnabled: false,
          headerStyle: {
            backgroundColor: '#708160',
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="DarkMode"
        component={DarkMode}
        options={{
          title: 'Dark Mode',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="Donation"
        component={Donation}
        options={{
          title: 'Donasi',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'Tentang COVID ID',
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={TabApp}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
