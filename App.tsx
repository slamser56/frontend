import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Entry, inputCode } from './src/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import { StackNavigationRoutes } from './src/page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={StackNavigationRoutes.HOME}>
            <Stack.Screen name={StackNavigationRoutes.HOME} component={Main} />
            <Stack.Screen
              name={StackNavigationRoutes.ENTRY}
              component={Entry}
            />
            <Stack.Screen
              name={StackNavigationRoutes.INPUT_CODE}
              component={inputCode}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
