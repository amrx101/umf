import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';


class Deck extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    fontSize: 18,
    backgroundColor: '#ccc',
  })

  navigateToQuiz = () => {
    const {navigation} = this.props
    const obj = {questions: navigation.state.params.questions}
    navigation.navigate('Quiz', obj)
  };

  navigateToAdd = () => {
      const {navigation } = this.props
      const obj = {title: this.props.navigation.state.params.title}
      navigation.navigate('AddQuestion', obj)
  };

  renderButton = (name, callable) => {
    return(
      <View style={{padding:10}}>
        <Button
            title={name}
            onPress={callable}
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
    const {decks} = this.props
    let questions = decks[params.title].questions
    console.log("QUESTIONS: ", questions)
    return (
      <View style={styles.container}>
        <Text>{params.name}</Text>
        <Text>Number of Cards: {questions.length}</Text>
        {this.renderButton("ADD QUESTION", this.navigateToAdd)}
        {this.renderButton("START QUIZ", this.navigateToQuiz)}
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

function matchStateToProps({decks}){
    return{
        decks: decks,
    }
}

export default connect(matchStateToProps)(Deck)
