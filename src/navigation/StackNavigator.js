import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from './Routes';
import HomeScreen from '../screens/home';

const HomeStack = createNativeStackNavigator();

export const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreenStack;
