import React,{Component} from 'react';
import {Text, View} from 'react-native';

class Card extends Component{
    render() {
        return (
            <View style={styles.cardStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    'cardStyle':{
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        borderBottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };