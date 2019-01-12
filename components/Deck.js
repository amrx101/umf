import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Deck extends React.Component {
  render() {
    onPressLearnMore = (e) => {
      console.log(e)
    }

    return (
      <View style={styles.container}>
        <Text>This is Deck</Text>
        <Button>
          onPress={onPressLearnMore}
          title="Add Deck"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
