import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles'
import {fetchAll, save} from '../utils/MyStorage'

export default class AddCardView extends React.Component {

  constructor(props) {
      super(props);
      this.state = { 
        question: '',
        answer: ''
      };
    }

  saveCard(){
      const deck = this.props.navigation.state.params.deck
      fetchAll().then(data => {
          if(data == undefined){
              let myData = {}
              myData[deck] = {
                  title: deck,
                  questions: [{
                    question: this.state.question,
                    answer: this.state.answer,
                  }]
              }
              save(JSON.stringify(myData)).then((e) => {
                  this.props.navigation.navigate('Home', {deck})
              })
          }
          else {
              let decks = JSON.parse(data)
              decks[deck].questions.push({
                question: this.state.question,
                answer: this.state.answer,
              })

              save(JSON.stringify(decks)).then((e) => {
                  this.props.navigation.navigate('Home', {deck})
              })                
          }
      })

  }

  render(){
      const navigation = this.props.navigation

      return(
        <View style={styles.deckContainer}>
        <View style={styles.centerContainer}>
          <Text style={styles.labelTitle}>Write a question for your card</Text>
          <TextInput style={styles.textInput} onChangeText={(question) => this.setState({question})}
            value={this.state.question} />
          <Text style={styles.labelTitle}>Put some text with the statement of this question</Text>
          <TextInput style={styles.textInput} onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer} />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => this.saveCard()} style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>        
      )
  }
}

