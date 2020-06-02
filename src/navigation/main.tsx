import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationRoutes from './StackNavigationRoutes';
import main from '../pages/main';
import entry from '../pages/entry';
import inputCode from '../pages/inputCode';

const MainStack = createStackNavigator();

export default function Navigation(): Element {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={StackNavigationRoutes.HOME} component={main} />
      <MainStack.Screen name={StackNavigationRoutes.ENTRY} component={entry} />
      <MainStack.Screen name={StackNavigationRoutes.INPUT_CODE} component={inputCode} />
    </MainStack.Navigator>
  );
}