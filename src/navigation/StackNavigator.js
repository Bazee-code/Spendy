import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from './Routes';
import HomeScreen from '../screens/home';
import BudgetScreen from '../screens/budget';
import ProfileScreen from '../screens/profile';

const HomeStack = createNativeStackNavigator();
const BudgetStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

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

export const BudgetScreenStack = () => {
  return (
    <BudgetStack.Navigator>
      <BudgetStack.Screen
        name={Routes.HOME_SCREEN}
        component={BudgetScreen}
        options={{
          headerShown: false,
        }}
      />
    </BudgetStack.Navigator>
  );
};

export const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};
