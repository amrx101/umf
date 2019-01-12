import React from 'react';
import { Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'



class AddCard extends React.Component{

    state = {
        question: '',
        answer: '',
    }

    setQuestion = (text) => {
        this.setState({question: text})
    }

    setAnswer = (text) => {
        this.setState({answer: text})
    }

    addQuest = (e) => {
        console.log(e)
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

    renderButton = (name, callable) => {
        const {question, answer} = this.state
        const isEnabled = question.length > 0 && answer.length > 0
        return(
            <View>
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
                    disabled={!isEnabled}
                    
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
                {this.renderButton("SUBMIT", this.addQuest)}
            </View>
        )
    }
}

export default AddCard