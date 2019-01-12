import React from 'react';
import { Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



class AddQuestion extends React.Component{

    state = {
        question: '',
        answer: '',
    }

    someFunction = (e) => {
        this.setState({question: e})
    }

    setQuestion = (text) => {
        this.setState({question: text})
    }

    setAnswer = (text) => {
        this.setState({answer: text})
    }

    renderForm = (label, callable, field) => {
        return(
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput
                    onChangeText={callable}
                    defaultValue={this.state.quesMsg}
                    value={field}
                />
            </View>
        )
    }

    render(){
        return(
            <View>
                <Text> This is the AddQuestion page. </Text>
                {this.renderForm("Question", this.setQuestion, this.state.question)}
                {this.renderForm("Answer", this.setAnswer, this.state.answer)}
            </View>
        )
    }
}

export default AddQuestion