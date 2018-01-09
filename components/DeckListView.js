import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'
import { fetchAll } from '../utils/MyStorage'

export default class DeckListView extends React.Component {
  state = {}
  componentWillMount(){
    console.log("DeckListView - componentWillMount")
    this.refreshState()
  }

  componentWillReceiveProps(){
    console.log("DeckListView - componentWillReceiveProps")
    this.refreshState()
  }

  refreshState(){
    fetchAll().then(data => {
      this.setState((state) => JSON.parse(data))      
    })
  }

  render(){
    const navigation = this.props.navigation
    const state = this.state
    console.log("DeckListView - render")
    return(
        <ScrollView>
        { this.state && Object.keys(state).map(x => state[x]).map(x => (
          <TouchableOpacity key={x.title} onPress={() => navigation.navigate('DeckView',{deck: x.title})} style={styles.neutralList}>
          <Text style={styles.whiteLabelTitle}>{x.title}</Text>
          <Text style={styles.whiteLabelSubtitle}>{`Cards(${x.questions.length})`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

