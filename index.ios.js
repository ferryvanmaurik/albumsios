import React from 'react';
import ReactNative from 'react-native';

// Create component
const App = () => {
  return (
    <Text>Some text</Text>
  );
};

// Render it to the device
// Return function of the firstb component to run which is App in this case
ReactNative.AppRegistry.registerComponent('albumsios', () => App);

