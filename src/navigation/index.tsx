import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationRoutes from './StackNavigationRoutes';
import main from '../page/main';
import entry from '../page/entry';
import inputCode from '../page/inputCode';
import profile from '../page/profile';
import writePost from '../page/writePost';

const Stack = createStackNavigator();

export default function Navigation(): Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StackNavigationRoutes.HOME}>
        <Stack.Screen name={StackNavigationRoutes.HOME} component={main} />
        <Stack.Screen name={StackNavigationRoutes.ENTRY} component={entry} />
        <Stack.Screen name={StackNavigationRoutes.INPUT_CODE} component={inputCode} />
        <Stack.Screen name={StackNavigationRoutes.PROFILE} component={profile} />
        <Stack.Screen name={StackNavigationRoutes.WRITE_POST} component={writePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
