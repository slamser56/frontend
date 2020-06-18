import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SingInRoutes } from './StackNavigationRoutes';
import signIn from '../pages/signIn';

const SignInStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name={SingInRoutes.SIGN_IN} component={signIn} />
    </SignInStack.Navigator>
  );
}
