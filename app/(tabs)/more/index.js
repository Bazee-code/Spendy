import React from 'react';
import { View, Text } from 'react-native';
import Home from '../../../src/screens/home';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>More screen</Text>
    </View>
  );
};

export default Page;
