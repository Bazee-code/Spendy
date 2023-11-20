import 'react-native-gesture-handler';

import React from 'react';
import { Redirect } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Redirect href={'/onboarding'} />
    </GestureHandlerRootView>
  );
}
