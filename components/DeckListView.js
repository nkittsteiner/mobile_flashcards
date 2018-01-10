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
      if(data !== undefined){
        const db = JSON.parse(data)
        this.setState(db)

        //Force redirection
        if(this.props.navigation.state.params !== undefined && this.props.navigation.state.params.deck !== undefined){
          const deck = this.props.navigation.state.params.deck
          const navigation = this.props.navigation
          const state = this.state
          if(Object.keys(state).indexOf(deck) != -1 && state[deck].questions !== undefined){
            navigation.navigate('DeckView',{deck, questions:  state[deck].questions})
          }
        }
      }
    })
  }

  render(){
    const navigation = this.props.navigation
    const state = this.state
    console.log("DeckListView - render", navigation.state.params)

    return(
        <ScrollView>
        { this.state && Object.keys(state).map(x => state[x]).map(x => (
          <TouchableOpacity key={x.title} onPress={() => 
            navigation.navigate('DeckView',{deck: x.title, questions: x.questions})} style={styles.neutralList}>
          <Text style={styles.whiteLabelTitle}>{x.title}</Text>
          <Text style={styles.whiteLabelSubtitle}>{`Cards(${x.questions.length})`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

