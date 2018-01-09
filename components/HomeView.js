import React from 'react';
import { StackNavigator } from 'react-navigation'; 
import  DeckListView  from './DeckListView'
import { AddCardView } from './AddCardView'
import { DeckView } from './DeckView'
import { QuizView } from './QuizView'
import { TabNav } from './Tabs'

const Stack = StackNavigator({
    Home: {
      screen: TabNav
    },
    DeckListView: {
      screen: DeckListView
    },
    DeckView: {
      screen: DeckView
    },
    QuizView: {
      screen: QuizView
    },
    AddCardView:{
      screen: AddCardView
    }
})

export default class HomeView extends React.Component {
    render() {
        return (
            <Stack />
        )
    }
}