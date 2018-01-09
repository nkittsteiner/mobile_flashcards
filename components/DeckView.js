import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles'

export const DeckView = ({ navigation }) => (
    <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>Title</Text>
        <Text style={styles.labelSubtitle}>Subtitle</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddCardView')} style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Add Card</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('QuizView')} style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
      </View>
    </View>
  )