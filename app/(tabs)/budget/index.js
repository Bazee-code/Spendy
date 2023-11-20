import React from 'react';
import { View, Text } from 'react-native';
import Home from '../../../src/screens/home';
import { Stack } from 'expo-router';
import Budget from '../../../src/screens/budget';

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Budget />
    </View>
  );
};

export default Page;
