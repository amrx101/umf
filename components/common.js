import React from 'react';
import {Button } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

class CustomButton extends React.Component {

    render(){
        const {styleIdentifier, name, callable} = this.props
        let buttonstyle = styles.default
        if (styleIdentifier === "red") {
            buttonStyle = styles.red
        } else if (styleIdentifier === "green"){
            buttonStyle = styles.green
        }

        return(
            <View style={{padding:30}}>
                <Button
                    title={name}
                    onPress={callable}
                    buttonStyle={buttonStyle}
                    containerStyle={{ marginBottom: 20, }}
                />
            </View>              
        )
    }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    green: {
        backgroundColor: "green",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        padding: 10
    },
    red: {
        backgroundColor: "red",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        padding: 10
    },
    default: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 9,
        borderRadius: 5,
        padding: 10,
    }
});

export default CustomButton;
