import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'


const deck1 = {
    name: 'Deck1',
    Questions: 3,
}

const deck2 = {
    name: 'Deck2',
    Questions: 2
}

const Decks = [deck1, deck2]

class DeckList extends React.Component{

    switchToDeck = (deck) => {
         this.props.navigation.navigate('Deck')
    }

    renderRow = ({deck}) => {
        console.log("Deck", deck);
        <ListItem>
            title={deck.name}
            subtitle={deck.Questions}
        </ListItem>
    }

    render() {
        return (
            <ScrollView>
                <List>
                {Decks.map((deck) => (
                    <ListItem
                    key={deck.name}
                    title={deck.name}
                    subtitle={deck.Questions}
                    />
                ))}
                </List>
            </ScrollView>
        )
    }
}



export default DeckList