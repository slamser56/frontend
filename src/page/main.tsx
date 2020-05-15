import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Text, Button, TextButton } from '../style/main';
import { ListAppState } from '../types';
import { checkConnect, logOut, checkToken } from '../action';
import { StackNavigationRoutes } from '../page';

export default function Main() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { phone, system } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    dispatch(checkConnect());
    dispatch(checkToken(phone.token));
  }, []);

  function handleClick() {
    navigation.navigate(StackNavigationRoutes.ENTRY);
  }
  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <Container>
      {system.connected ? (
        <>
          <Text>Connected to api</Text>
          {phone.token ? (
            <>
              <Text>Your phone number: {phone.phoneNumber}</Text>
              <Button onPress={handleLogOut}>
                <Text>Log out</Text>
              </Button>
            </>
          ) : (
            <Button onPress={handleClick}>
              <TextButton>Go to Registration</TextButton>
            </Button>
          )}
        </>
      ) : (
        <Text>Don't connected to api</Text>
      )}
    </Container>
  );
}
