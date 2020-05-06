import React,{Component} from 'react';
import {Text,View,TextInput} from 'react-native';


class Input extends Component{
    render() {
        const {label,onChangeText,value,placeholder,password} = this.props;
        const {labelStyle,inputStyle,containerStyle} = styles;
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={password}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
        );
    }
}

const styles = {
        labelStyle: {
            fontSize: 16,
            flex: 0.7,
            paddingLeft: 10,
            fontWeight: 'bold'
        },
        inputStyle: {
            color: '#000',
            paddingLeft: 10,
            paddingRight: 10,
            flex: 2,
            fontSize: 18,
            lineHeight: 23
        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
};

export {Input};