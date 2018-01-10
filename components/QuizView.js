import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationActions} from 'react-navigation'
import { styles } from '../styles'
import { clearLocalNotification, setLocalNotification} from '../utils/Notification'

export default class QuizView extends React.Component {

  componentDidMount(){
    // Means user have practice so disable notifications until tomorrow
    console.log('Means user have practice so disable notifications until tomorrow')
    clearLocalNotification()
      .then(setLocalNotification)
  }

  navigate(deck, current){
    const navigation = this.props.navigation
    const { questions, answered, correct } = this.props.navigation.state.params
    navigation.navigate('QuizResponseView', {
      deck,
      questions,
      answered,
      correct,
      current
    })
  }

  redirectToDeck(deck, questions){
    const navigation = this.props.navigation
    navigation.navigate('DeckView',{ deck, questions})
  }

  resetQuiz(deck, questions){
    const navigation = this.props.navigation
    navigation.navigate('QuizView', {
      deck,
      questions,
      answered: [],
      correct: 0
    })
  }

  render(){
    const navigation = this.props.navigation
    const { deck, questions, answered, correct } = this.props.navigation.state.params
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
        {!stop && (
          <TouchableOpacity onPress={() => this.navigate(deck, current)} style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Show Answer</Text>
          </TouchableOpacity>
        )}
        {stop && (
          <View>
            <TouchableOpacity onPress={() => this.redirectToDeck(deck, answered)} style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Back to Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.resetQuiz(deck, answered)} style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Try Again?</Text>
          </TouchableOpacity>
          </View>
        )}

      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>      
    )
  }
}
