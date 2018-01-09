import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles'

export const AddCardView = ({ navigation }) => (
    <View style={styles.deckContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.labelTitle}>Write a question for your card</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.labelTitle}>Put some text with the statement of this question</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddCardView')} style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Add card</Text>
        </TouchableOpacity>
      </View>
    </View>
  )