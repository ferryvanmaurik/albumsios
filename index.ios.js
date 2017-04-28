import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create component
const App = () => (
  <Text>Some text</Text>
);

// Render it to the device
// Return function of the firstb component to run which is App in this case
AppRegistry.registerComponent('albumsios', () => App);

