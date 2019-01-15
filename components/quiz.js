import React from 'react';
import { Text, View } from 'react-native';

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class Quiz extends React.Component{
    state = {
        totalQuestions: '',
        answeredQuestions: '',
        correctAnswers: '',
    }

    render(){
        const {navigation} = this.props
        const {questions} = navigation.state.params.questions
        console.log(questions)
        if (isEmpty(questions)){
            return(
                <View><Text> There are no questions in the deck. </Text></View>
            )
        }
        return(
            <View>
                <Text> This is Quiz </Text>
            </View>
        )
    }
}



export default Quiz

