import React from 'react';
import Home from '../../../src/screens/home';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Home />
    </>
  );
};

export default Page;
