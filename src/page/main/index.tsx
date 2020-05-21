import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '../../components/text';
import { Container } from '../../components/view';
import { Button } from '../../components/button';
import { ListAppState } from '../../stateManager/listTypes';
import { logOut, checkToken } from '../../stateManager/phone/action';
import checkConnect from '../../stateManager/system/action';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';

export default function Main(): Element {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { phone, system } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    dispatch(checkConnect());
    dispatch(checkToken(phone.token));
  }, []);

  function handleClick(): void {
    navigation.navigate(StackNavigationRoutes.ENTRY);
  }
  function handleClickProfile(): void {
    navigation.navigate(StackNavigationRoutes.PROFILE);
  }
  function handleLogOut(): void {
    dispatch(logOut());
  }

  return (
    <Container>
      {system.connected ? (
        <>
          <Text fontSize="40px" mb="20px">
            Connected to api
          </Text>
          {phone.token ? (
            <>
              <Text>
                Your phone number:
                {phone.phoneNumber}
              </Text>
              <Button mt="10px" onPress={handleLogOut}>
                <Text fontSize="20px">Log out</Text>
              </Button>
              <Button mt="10px" onPress={handleClickProfile}>
                <Text fontSize="20px">Profile</Text>
              </Button>
            </>
          ) : (
            <Button onPress={handleClick}>
              <Text fontSize="20px">Go to Registration</Text>
            </Button>
          )}
        </>
      ) : (
        <Text color="red">Don&#39;t connected to api</Text>
      )}
    </Container>
  );
}
