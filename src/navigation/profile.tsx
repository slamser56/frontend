import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileRoutes } from './StackNavigationRoutes';
import profile from '../pages/profile';
import writePost from '../pages/writePost';
import subscription from '../pages/subscription';
import findUser from '../pages/findUser';

const ProfileStack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={ProfileRoutes.PROFILE} component={profile} />
      <ProfileStack.Screen name={ProfileRoutes.WRITE_POST} component={writePost} />
      <ProfileStack.Screen name={ProfileRoutes.SUBSCRIPTION} component={subscription} />
      <ProfileStack.Screen name={ProfileRoutes.FIND_USER} component={findUser} />
    </ProfileStack.Navigator>
  );
}
