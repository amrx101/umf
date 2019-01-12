import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Deck extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    fontSize: 18,
    backgroundColor: '#ccc',
  })

  onPressLearnMore = (e) => {
    console.log(e)
  };

  renderButton = (name) => {
    return(
      <View style={{padding:10}}>
        <Button
            icon={
              <Icon
                name='arrow-right'
                size={15}
                color='red'
              />
            }
            title={name}
            onPress={this.onPressLearnMore}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              padding: 10
            }}
            containerStyle={{ marginBottom: 20, }}
          />
        </View>
    )
  };

  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text>{params.name}</Text>
        <Text>Number of Decks: {params.Questions}</Text>
        {this.renderButton("ADD CARD")}
        {this.renderButton("START QUIZ")}
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
