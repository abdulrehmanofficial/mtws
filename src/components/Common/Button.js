import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {buttonStyle , buttonText} = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={buttonText}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#007aff',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        padding: 5
    }
};

export { Button };