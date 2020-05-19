import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Container, Button } from '../../style';
import { ListAppState } from '../../stateManager/listTypes';
import { logOut, checkToken } from '../../stateManager/phone/action';
import checkConnect from '../../stateManager/system/action';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';

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
  function handleClickProfile() {
    navigation.navigate(StackNavigationRoutes.PROFILE);
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
              <Text>
                Your phone number:
                {phone.phoneNumber}
              </Text>
              <Button onPress={handleLogOut}>
                <Text fontSize="20px">Log out</Text>
              </Button>
              <Button style={{ marginTop: 10 }} onPress={handleClickProfile}>
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
