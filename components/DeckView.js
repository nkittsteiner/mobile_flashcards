import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'

export default class DeckView extends React.Component {
  render(){
    const navigation = this.props.navigation
    const { deck, questions}  = this.props.navigation.state.params
    return(
      <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>{deck}</Text>
        <Text style={styles.labelSubtitle}>{`Cards (${questions.length})`}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddCardView',{ deck: navigation.state.params.deck })} style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Add Card</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView', {
          questions,
          answered: [],
          correct: 0
        })} style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>
    )
  }
}