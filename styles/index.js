import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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