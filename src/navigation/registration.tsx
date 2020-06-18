import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationRoutes } from './StackNavigationRoutes';
import entry from '../pages/entry';
import inputCode from '../pages/inputCode';

const RegistrationStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen name={RegistrationRoutes.ENTRY} component={entry} />
      <RegistrationStack.Screen name={RegistrationRoutes.INPUT_CODE} component={inputCode} />
    </RegistrationStack.Navigator>
  );
}
