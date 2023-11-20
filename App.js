import React from 'react';
import { HomeBottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
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
};

export default App;
