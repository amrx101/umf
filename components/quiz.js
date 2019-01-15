import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

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
        this.setState({correctAnswers: correctAnswers +1, currentQuestion: currentQuestion + 1})
    }

    onIncorrectSubmit = () => {
        const {currentQuestion} = this.state
        this.setState({currentQuestion: currentQuestion+1})
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
        debugger
        const {questions} = navigation.state.params
        const {totalQuestions, answeredQuestions, correctAnswers, currentQuestion, revealAnswer} = this.state
        
        console.log(questions)
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

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.onCorrectSubmit}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200
                                    }}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onIncorrectSubmit}>
                                    <Text style={{
                                        backgroundColor: '#ff463f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200,
                                        marginTop: 20
                                    }}>Incorrect</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                ) : (
                    <View style={styles.container}>
                        <Text>Score: {correctAnswers}</Text>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.startQuiz}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200
                                    }}>Start Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.stopQuiz}>
                                    <Text style={{
                                        backgroundColor: '#ff463f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200,
                                        marginTop: 20
                                    }}>Back to Deck</Text>
                                </TouchableOpacity>

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

