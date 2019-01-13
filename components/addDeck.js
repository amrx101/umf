import React   from 'react'
import {Text, View} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { createDeck } from '../utils/api'
import {addDeck } from '../actions/index'
import {connect} from 'react-redux'

class AddDeck extends React.Component {
    state = {
        title: ''
    }

    setTitle = (text) => {
        this.setState({title: text})
    }

    navigateToNew = (newDeck) => {
        const deck = newDeck[this.state.title]
        this.state.title = ''
        this.props.navigation.navigate('DeckDetails', deck)
    }

    createDeck = () => {
        // How do we dynamically add navigation routes?
        console.log("Create New Deck and route to this deck")
        const {title} = this.state
        const newDeck = {[title]: {title: title, questions: []}};
        const {dispatch} = this.props

        createDeck(newDeck).then(()=> dispatch(addDeck(newDeck))).then(() => {this.navigateToNew(newDeck)})
    }

    renderForm = (label, callable, field) => {
        return(
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput
                    onChangeText={callable}
                    value={field}
                />
            </View>
        )
    }

    renderButton = (name, callable) => {
        const {title} = this.state
        const isEnabled = title.length > 0
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
                <Text> This is AddDeck Page. </Text>
                {this.renderForm("Name of the Deck", this.setTitle, this.state.title)}
                {this.renderButton("New Deck", this.createDeck)}
            </View>
        )
    }
}



export default connect()(AddDeck)