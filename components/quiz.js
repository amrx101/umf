import React from 'react';
import { Text, View } from 'react-native';

class Quiz extends React.Component{
    state = {
        totalQuestions: '',
        answeredQuestions: '',
        correctAnswers: '',
    }

    render(){
        const {navigation} = this.props
        console.log(navigation)
        return(
            <View>
                <Text> This is Quiz </Text>
            </View>
        )
    }
}

export default Quiz

