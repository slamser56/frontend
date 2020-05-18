import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Main,
  Entry,
  inputCode,
  profile,
  StackNavigationRoutes,
} from './index';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StackNavigationRoutes.HOME}>
        <Stack.Screen name={StackNavigationRoutes.HOME} component={Main} />
        <Stack.Screen name={StackNavigationRoutes.ENTRY} component={Entry} />
        <Stack.Screen
          name={StackNavigationRoutes.INPUT_CODE}
          component={inputCode}
        />
        <Stack.Screen
          name={StackNavigationRoutes.PROFILE}
          component={profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
