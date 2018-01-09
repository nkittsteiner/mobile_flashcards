import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'

export const QuizView = ({ navigation }) => (
    <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>Title</Text>
        <Text style={styles.labelSubtitle}>Subtitle</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView')} style={styles.buttonCorrect}>
          <Text style={styles.buttonCorrectText}>Correct</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView')} style={styles.buttonIncorrect}>
          <Text style={styles.buttonIncorrectText}>Incorrect</Text>
        </TouchableOpacity>      
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>
  )