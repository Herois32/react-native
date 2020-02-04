//import { createAppContainer } from 'react-navigation';
import { Component } from 'react';
//createMaterialBottomTabNavigator

import { createBottomTabNavigator } from 'react-navigation-tabs';


import 'react-native-gesture-handler';

import Tela1 from './Tela1';
import Tela2 from './Tela2';

const HomeTabNavigator = createBottomTabNavigator({
  Tela1:{
    screen:Tela1
  },
  Tela2:{
    screen:Tela2
  }
});

export default HomeTabNavigator;
