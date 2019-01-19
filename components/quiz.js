import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import CustomButton  from '../components/common'

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class Quiz extends React.Component{
    state = {
        totalQuestions: 0,
        answeredQuestions: 0,
        correctAnswers: 0,
        currentQuestion: 0,
        revealAnswer: false,
    }

    onCorrectSubmit = () => {
        const {correctAnswers, currentQuestion} = this.state
        this.setState({
            correctAnswers: correctAnswers +1,
            currentQuestion: currentQuestion + 1,
            revealAnswer: false,
            })
    }

    onIncorrectSubmit = () => {
        const {currentQuestion} = this.state
        this.setState({
            currentQuestion: currentQuestion+1,
            revealAnswer: false,
        })
    }

    beginQuiz = () => {
        this.setState({
            totalQuestions: 0,
            answeredQuestions: 0,
            correctAnswers: 0,
            currentQuestion: 0,
            revealAnswer: false,
        });
    }

    stopQuiz = () => {
        this.props.navigation.goBack()
    }

    showAnswer = () => {
        this.setState({revealAnswer: true})
    }

    render(){
        const {navigation} = this.props
        const {questions} = navigation.state.params
        const {totalQuestions, answeredQuestions, correctAnswers, currentQuestion, revealAnswer} = this.state
        
        if (isEmpty(questions)){
            return(
                <View><Text> There are no questions in the deck. </Text></View>
            )
        }
        const isQuestionAvailable = currentQuestion < questions.length;
        return (
            <View style={{flex: 1}}>
                {isQuestionAvailable ? (
                    <View style={styles.container}>

                        <View style={[styles.group, {justifyContent: 'flex-start', flex: 1}]}>
                            <View>
                                <Text>{currentQuestion+1} / {questions.length}</Text>
                            </View>
                        </View>

                        <View style={[styles.group, {flex: 4}]}>
                            <View>
                                {revealAnswer ? (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[currentQuestion].answer}</Text>
                                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
                                        <View >
                                            <CustomButton styleIdentifier="green" name="Correct" callable={this.onCorrectSubmit} />
                                            <CustomButton styleIdentifier="red" name="Incorrect" callable={this.onIncorrectSubmit}/>
                                        </View>
                                    </View>
                                        
                                </View>) : (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[currentQuestion].question}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#ff463f'}}>Answer</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </View>
                        </View>
                    </View>

                ) : (
                    <View style={styles.container}>
                        <Text>Score: {correctAnswers}</Text>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>
                                <CustomButton styleIdentifier="green" name="Start Quiz" callable={this.beginQuiz}/>
                                <CustomButton styleIdentifier="red" name="Back To Deck" callable={this.stopQuiz}/>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    }
});



export default Quiz

