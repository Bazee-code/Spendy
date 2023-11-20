import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from './Routes';
import HomeScreenStack from './StackNavigator';
import Svg, { G, Path } from 'react-native-svg';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login';

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
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Budget',
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
        name={Routes.PROFILE_TAB}
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99963 11.53 6.80963 9.25 6.80963 6.44C6.80963 3.58 9.13963 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96963 2.75 8.30963 4.41 8.30963 6.44C8.30963 8.44 9.86963 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z"
                fill="#A29BB1"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
                fill="#A29BB1"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
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
