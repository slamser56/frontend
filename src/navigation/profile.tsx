import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationRoutes from './StackNavigationRoutes';
import profile from '../pages/profile';
import writePost from '../pages/writePost';

const ProfileStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={StackNavigationRoutes.PROFILE} component={profile} />
      <ProfileStack.Screen name={StackNavigationRoutes.WRITE_POST} component={writePost} />
    </ProfileStack.Navigator>
  );
}
