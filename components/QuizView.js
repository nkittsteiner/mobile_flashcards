import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'

export default class QuizView extends React.Component {

  navigate(isCorrect, current, stop){
    const navigation = this.props.navigation
    const { questions, answered, correct } = this.props.navigation.state.params

    if(!stop){
      navigation.navigate('QuizResponseView', {
        isCorrect: isCorrect,
        questions,
        answered,
        correct,
        current
      })
    }
  }

  render(){
    const navigation = this.props.navigation
    const { questions, answered, correct } = this.props.navigation.state.params
    let current, question, stop
    const total = questions.length + answered.length

    if(questions.length > 0){
      current = questions.shift()
    }

    if(current === undefined){
      question = 'No more questions!'
      stop = true
    }
    else
      question = current.question
    return(
      <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>{question}</Text>
        <Text style={styles.labelSubtitle}>{correct} of {total} correct answers</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => this.navigate(true, current, stop)} style={styles.buttonCorrect}>
          <Text style={styles.buttonCorrectText}>Correct</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => this.navigate(false, current, stop)} style={styles.buttonIncorrect}>
          <Text style={styles.buttonIncorrectText}>Incorrect</Text>
        </TouchableOpacity>      
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>      
    )
  }
}
