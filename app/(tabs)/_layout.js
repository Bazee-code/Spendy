import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router/tabs';
import { Pressable } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Budget',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'More',
        }}
      />
    </Tabs>
  );
}
