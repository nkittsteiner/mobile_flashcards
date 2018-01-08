import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; 
import { fetchAll, save } from './utils/MyStorage'

export default class App extends React.Component {
  componentDidMount(){
    fetchAll().then(data => console.log(data))
    
    save(JSON.stringify( {decks:[]} )).then(() => console.log('save'))
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs />
      </View>
    );
  }
}

const DeckListView = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('DeckView')} style={styles.neutralList}>
      <Text style={styles.whiteLabelTitle}>Deck dd</Text>
      <Text style={styles.whiteLabelSubtitle}>Cards(0)</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DeckView')} style={styles.neutralList}>
      <Text style={styles.whiteLabelTitle}>Deck N</Text>
      <Text style={styles.whiteLabelSubtitle}>0 Cards</Text>
    </TouchableOpacity>    
  </View>
)

const DeckView = ({ navigation }) => (
  <View style={styles.deckContainer}>
    <View style={styles.centerContainer}>
      <Text style={styles.labelTitle}>Title</Text>
      <Text style={styles.labelSubtitle}>Subtitle</Text>
    </View>
    <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('DeckView')} style={styles.buttonPrimary}>
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

const QuizView = ({ navigation }) => (
  <View style={styles.deckContainer}>
    <View style={styles.centerContainer}>
      <Text style={styles.labelTitle}>Title</Text>
      <Text style={styles.labelSubtitle}>Subtitle</Text>
    </View>
    <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('DeckView')} style={styles.buttonCorrect}>
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

const NewDeckView = ({ navigation }) => (
  <View style={styles.deckContainer}>
    <View style={styles.centerContainer}>
      <Text style={styles.labelTitle}>What is the title of your new deck</Text>
      <TextInput style={styles.textInput} />
    </View>
    <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AddCardView')} style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Submit</Text>
      </TouchableOpacity>    
    </View>
  </View>
)

const AddCardView = ({ navigation }) => (
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

const Stack = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  DeckView: {
    screen: DeckView
  },
  QuizView: {
    screen: QuizView
  },  
})

const StackNewDeck = StackNavigator({
  NewDeckView: {
    screen: NewDeckView
  },
  AddCardView: {
    screen: AddCardView
  },  
 
})

const Home = () => (
  <Stack />
);

const NewDeck = () => (
  <StackNewDeck />
);

const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  "New Deck": {
    screen: NewDeck
  },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neutralList: {
    height: 100,
    backgroundColor: '#ddd',
    margin: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  whiteLabelTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  whiteLabelSubtitle: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
  labelTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  labelSubtitle: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
  },  
  deckContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  buttonPrimary: {
    borderColor: 'black',
    backgroundColor: 'white',
    height: 50,
    width: 100,
    margin: 3,
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonSecondary: {
    borderColor: 'white',
    backgroundColor: 'black',
    height: 50,
    width: 100,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonSecondaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonCorrect: {
    borderColor: 'green',
    backgroundColor: 'green',
    height: 50,
    width: 100,
    margin: 3,
    justifyContent: 'center',
  },
  buttonCorrectText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonIncorrect: {
    borderColor: 'white',
    backgroundColor: 'red',
    height: 50,
    width: 100,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonIncorrectText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },  
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centerContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
});