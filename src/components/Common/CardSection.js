import React, { Component } from 'react';
import { View } from 'react-native';

class CardSection extends Component {
    render() {
        return (
            <View style={styles.sectionStyle, this.props.passedStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    'sectionStyle': {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
};

export { CardSection };