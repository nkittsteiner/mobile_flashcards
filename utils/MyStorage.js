import { AsyncStorage } from 'react-native';

const schema = 'MobileFlashcards'
const key = 'decks'


export async function fetchAll() {
    try {
        const value = await AsyncStorage.getItem(`@${schema}:${key}`);
        if (value !== null){
          // We have data!!
          return value
        }
      } catch (error) {
        // Error retrieving data
      }
}

export async function save(documentTree){
    try {
        await AsyncStorage.setItem(`@${schema}:${key}`, documentTree);
      } catch (error) {
        // Error saving data
      }
}