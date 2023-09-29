import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/views/navigation/BottomTabNavigator'
import StackNavigation from './src/views/navigation/StackNavigator';
const App = () => {

  return (
    <StackNavigation/>
  );
};

export default App;
