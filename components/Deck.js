import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Deck extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    fontSize: 18,
    backgroundColor: '#ccc',
  })

  onPressLearnMore = (e) => {
    console.log(e)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Deck</Text>
          <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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
