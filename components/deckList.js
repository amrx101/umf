import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements'


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

    state = {
        decks: Decks,
    }
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

    render(){
        return(
            <List>
                <FlatList>
                    data={this.state.decks},
                    renderItem={this.renderRow},
                    keyExtractor={deck => deck.name},
                </FlatList>
            </List>
        )
    }
    
}

/*
render() {
    return (
      <ScrollView>
        <List>
          {decks.map((deck) => (
            <ListItem
              key={deck.name}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
*/ 

export default DeckList