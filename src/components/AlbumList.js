import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        //Open debugger in stimulator: cntr+d
        console.log('componentWillMount in AlbumList');
        //debugger;
    }

    render() {
        return (
            <View>
                <Text>Album list!!</Text>
            </View>
        );
    }
}

export default AlbumList;