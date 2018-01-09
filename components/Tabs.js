import React from 'react';
import { TabNavigator } from 'react-navigation'; 
import NewDeckView  from './NewDeckView'
import DeckListView from './DeckListView'

export const TabNav = TabNavigator({
    Home: {
      screen: DeckListView
    },
    "New Deck": {
      screen: NewDeckView
    },
});
/*
export default class Tabs extends React.Component {
    render() {
        return (
            <TabNav />
        )
    }
}
*/