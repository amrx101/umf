import React from 'react';
import { Text, View } from 'react-native';
import Deck from './Deck'

const list = ["Number1", "Number2", "Number3"]

class DeckList extends React.Component{
    switchToDeck = (deck) => {
         this.props.navigation.navigate('Deck')
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