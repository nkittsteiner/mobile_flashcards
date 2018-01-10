import React from 'react';
import { View } from 'react-native';
import { fetchAll, save } from './utils/MyStorage'
import HomeView  from './components/HomeView'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/Notification'

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <View style={{flex: 1}}>        
        <View style={{height: Constants.statusBarHeight}} />
        <HomeView />
      </View>
    );
  }
}