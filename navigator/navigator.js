import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import DeckList from '../components/deckList';
import AddDeck from '../components/addDeck';


const Tabs = createBottomTabNavigator({
  Decks: {screen: DeckList},
  NewDeck: {screen: AddDeck},
});

const TabNavigator = createAppContainer(Tabs);
export default TabNavigator;
