import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from './Routes';
import { BudgetScreenStack, HomeScreenStack } from './StackNavigator';
import Svg, { G, Path } from 'react-native-svg';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeTab = createBottomTabNavigator();
const OnBoardingStack = createNativeStackNavigator();

export const BottomTabNavigator = () => {
  return (
    <HomeTab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: '#FFF',
          borderWidth: 0,
        },
        tabBarActiveTintColor: '#080416',
        tabBarInactiveTintColor: '#A29BB1',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <HomeTab.Screen
        name={Routes.HOME_TAB}
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M10.07 2.81984L3.14002 8.36983C2.36002 8.98983 1.86002 10.2999 2.03002 11.2799L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2799C22.13 10.2999 21.63 8.98983 20.86 8.36983L13.93 2.82985C12.86 1.96985 11.13 1.96984 10.07 2.81984Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <HomeTab.Screen
        name={Routes.BUDGET_TAB}
        component={BudgetScreenStack}
        options={{
          tabBarLabel: 'Budget',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name={Routes.PROFILE_TAB}
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export const HomeBottomTabNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? (
        <BottomTabNavigator />
      ) : (
        <OnBoardingStack.Navigator initialRouteName={Routes.ONBOARDING_SCREEN}>
          <OnBoardingStack.Screen
            name={Routes.ONBOARDING_SCREEN}
            component={OnboardingScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_left',
            }}
          />
          <OnBoardingStack.Screen
            name={Routes.LOGIN_SCREEN}
            component={LoginScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <OnBoardingStack.Screen
            name={Routes.HOME_SCREEN}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          >
            {() => <BottomTabNavigator />}
          </OnBoardingStack.Screen>
        </OnBoardingStack.Navigator>
      )}
    </>
  );
};
