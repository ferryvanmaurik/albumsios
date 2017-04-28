import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    // Destructuring
const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the application
export default Header;