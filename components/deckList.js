import React from 'react';
import { Text, View } from 'react-native';


let deck1 = {
    name: 'Deck1',
    Questions: 3,
}

let deck2 = {
    name: 'Deck2',
    Questions: 2
}

let Decks = [deck1, deck2]

class DeckList extends React.Component{
    switchToDeck = (deck) => {
         this.props.navigation.navigate('Deck')
    }

    renderRow = ({deck}) => {
        

    }
    render(){
        return(
            <View>
                <Text> This is it</Text>
            </View>
        )
    }
}

export default DeckList