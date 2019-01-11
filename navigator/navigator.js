import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import DeckList from '../components/deckList';
import AddDeck from '../components/addDeck';
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList, 
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
