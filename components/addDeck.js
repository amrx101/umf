import React   from 'react'
import {Text, View} from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

class AddDeck extends React.Component {
    state = {
        name: ''
    }

    setName = (text) => {
        this.setState({name: text})
    }

    createDeck = (e) => {
        // How do we dynamically add navigation routes?
        console.log("Create New Deck and route to this deck")
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

    


    render(){
        return(
            <View>
                <Text> This is AddDeck Page. </Text>
                {this.renderForm("Name of the Deck", this.setName, this.state.name)}
            </View>
        )
    }
}

export default AddDeck