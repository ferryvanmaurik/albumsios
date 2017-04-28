import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    // Destructuring
const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums!</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the application
export default Header;