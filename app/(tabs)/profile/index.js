import { View, Text } from 'react-native';
import React from 'react';
import Home from '../../../src/screens/home';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Profile screen</Text>
    </View>
  );
};

export default Page;
