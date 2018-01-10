import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles'
import { save, fetchAll } from '../utils/MyStorage'

export default class NewDeckView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { deckName: '' };
      }

    saveDeck(){
        const deckName = this.state.deckName
        fetchAll().then(data => {
            if(data == undefined){
                let myData = {}
                myData[deckName] = {
                    title: deckName,
                    questions: []
                }
                save(JSON.stringify(myData)).then((e) => {
                    this.props.navigation.navigate('Home', {deck: deckName, questions: []})
                })
            }
            else {
                let decks = JSON.parse(data)
                decks[deckName] = {
                    title: deckName,
                    questions: []
                }

                save(JSON.stringify(decks)).then((e) => {
                    this.props.navigation.navigate('Home', {deck: deckName, questions: []})
                })                
            }
        })

    }

    render(){
        return(
            <View style={styles.deckContainer}>
              <View style={styles.centerContainer}>
                <Text style={styles.labelTitle}>What is the title of your new deck</Text>
                <TextInput onChangeText={(deckName) => this.setState({deckName})} 
                    value={this.state.deckName} style={styles.textInput} />
              </View>
              <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => this.saveDeck()} style={styles.buttonSecondary}>
                  <Text style={styles.buttonSecondaryText}>Submit</Text>
                </TouchableOpacity>    
              </View>
            </View>
        )
    }
}

