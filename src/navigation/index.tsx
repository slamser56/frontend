import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MainRoutes} from './StackNavigationRoutes';
import profileStack from './profile';
import registrationStack from './registration';
import main from '../pages/main';
import signInStack from './signIn';

const RootStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={MainRoutes.MAIN} component={main} options={{ headerShown: false }} />
        <RootStack.Screen name={MainRoutes.REGISTRATION_STACK} component={registrationStack} options={{ headerShown: false }} />
        <RootStack.Screen name={MainRoutes.SIGN_IN_STACK} component={signInStack} options={{ headerShown: false }} />
        <RootStack.Screen name={MainRoutes.PROFILE_STACK} component={profileStack} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
