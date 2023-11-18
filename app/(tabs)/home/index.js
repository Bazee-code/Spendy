import React from 'react';
import { View, Text } from 'react-native';
import Home from '../../../src/screens/home';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Home />
    </View>
  );
};

export default Page;
