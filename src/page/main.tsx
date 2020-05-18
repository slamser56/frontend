import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from '../style/main';
import { Text } from '../style';
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
          <Text fontSize="40px" marginBottom="20px">
            Connected to api
          </Text>
          {phone.token ? (
            <>
              <Text>Your phone number: {phone.phoneNumber}</Text>
              <Button onPress={handleLogOut}>
                <Text fontSize="20px">Log out</Text>
              </Button>
            </>
          ) : (
            <Button onPress={handleClick}>
              <Text fontSize="20px">Go to Registration</Text>
            </Button>
          )}
        </>
      ) : (
        <Text color="red">Don't connected to api</Text>
      )}
    </Container>
  );
}
