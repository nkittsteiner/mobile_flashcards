import React from 'react';
import { View } from 'react-native';
import { fetchAll, save } from './utils/MyStorage'
import HomeView  from './components/HomeView'
import { Constants } from 'expo'


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight }} />
        <HomeView />
      </View>
    );
  }
}