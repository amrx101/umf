import React from 'react';
import { Text, View } from 'react-native';
import Deck from './Deck'

// TODO Navigate to each deck.

const list = ["Number1", "Number2", "Number3"]

class DeckList extends React.Component{
    render(){
        return(
            <View>
                <Deck/>
                <Deck/>
            </View>
        )
    }
}

export default DeckList