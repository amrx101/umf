import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { receiveDecks } from '../actions/index';
import {getDecks} from '../utils/api';


/*
This data will be ultimately fetched from the store.
*/
const deck1 = {
    name: 'Deck1',
    Questions: [3],
}

const deck2 = {
    name: 'Deck2',
    Questions: [2]
}

const Decks = [deck1, deck2]

class DeckList extends React.Component{

    state = {
        ready : false,
    }

    componentDidMount(){
        const {dispatch} = this.props
        getDecks().then(decks => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})));

    }

    switchToDeck = (deck) => {
         this.props.navigation.navigate('DeckDetails', deck)
    };

    render() {
        const {ready} = this.state
        if (ready === false){
            return (
                <View>
                    <Text> Loding </Text>
                </View>
            )
        }
        const {decks} = this.props
        const Decks = Object.values(decks)

        return (
            <ScrollView>
                <List>
                    {Decks.map((deck) => (
                        <ListItem
                            key={deck.title}
                            title={deck.title}
                            subtitle={deck.questions.length}
                            onPress={() => this.switchToDeck(deck)}
                        />
                    ))}
                </List>
            </ScrollView>
        )
    };
}


function matchStateToProps({decks}){
    return{
        decks: decks,
    }
}



export default connect(matchStateToProps)(DeckList)