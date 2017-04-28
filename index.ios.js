import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
  <View>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);

// Render it to the device
// Return function of the firstb component to run which is App in this case
AppRegistry.registerComponent('albumsios', () => App);

