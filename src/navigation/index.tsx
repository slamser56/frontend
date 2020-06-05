import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationRoutes from './StackNavigationRoutes';
import profileStack from './profile';
import mainStack from './main';

const RootStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={StackNavigationRoutes.MAIN_STACK} component={mainStack} options={{ headerShown: false }} />
        <RootStack.Screen name={StackNavigationRoutes.PROFILE_STACK} component={profileStack} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
