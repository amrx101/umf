import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import DeckList from '../components/deckList';
import AddDeck from '../components/addDeck';
import Deck from '../components/deck';
import AddCard from '../components/newCard';
import Quiz from '../components/quiz';
import { FontAwesome } from '@expo/vector-icons';

const PageNav = createStackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    },
  },
  DeckDetails: {
    screen: Deck,
  },
  AddQuestion: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card'
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
});

const PagesStack = createAppContainer(PageNav);


const Tabs = createBottomTabNavigator({
  Decks: {
    screen: PagesStack, 
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='th-list' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NewDeck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
});

const TabNavigator = createAppContainer(Tabs);
export default TabNavigator;
