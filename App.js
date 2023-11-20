import React from 'react';
import { HomeBottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const App = gestureHandlerRootHOC(() => {
  const myTheme = {
    colors: {
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={myTheme}>
      <HomeBottomTabNavigator />
    </NavigationContainer>
  );
});

export default App;
