import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Entry, inputCode } from './src/index';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Entry" component={Entry} />
          <Stack.Screen name="inputCode" component={inputCode} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
