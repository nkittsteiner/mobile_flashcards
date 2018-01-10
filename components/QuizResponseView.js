import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'

export default class QuizResponseView extends React.Component {
  render(){
    const navigation = this.props.navigation
    const { deck, questions, answered, correct, current } = this.props.navigation.state.params
    console.log('deck', deck)
    const total = questions.length + answered.length +1

    let _answered = answered
    _answered.push(current)
    
    return(
      <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>{current.answer}</Text>
        <Text style={styles.labelSubtitle}>{correct} of {total} correct answers</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView', {
          deck,
          questions,
          answered: _answered,
          correct: correct + 1
        })} style={styles.buttonCorrect}>
          <Text style={styles.buttonCorrectText}>Correct</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView', {
          deck,
          questions,
          answered: _answered,
          correct
        })} style={styles.buttonIncorrect}>
          <Text style={styles.buttonIncorrectText}>Incorrect</Text>
        </TouchableOpacity>      
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>      
    )
  }
}
