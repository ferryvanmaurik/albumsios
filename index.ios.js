import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
// Return function of the firstb component to run which is App in this case
AppRegistry.registerComponent('albumsios', () => App);

