import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import lodash from 'lodash';
import Text from '../../components/text';
import { Container } from '../../components/view';
import { Button } from '../../components/button';
import { ListAppState } from '../../stateManager/listTypes';
import { logOut, checkToken } from '../../stateManager/phone/action';
import checkConnect from '../../stateManager/system/action';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';

export default function Main(): Element {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { phone } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await dispatch(checkConnect());
        if (phone.token) await dispatch(checkToken(phone.token));
      } catch (error) {
        Toast.show(error);
      }
    })();
  }, []);

  function handleClick(): void {
    navigation.navigate(StackNavigationRoutes.ENTRY);
  }
  function handleClickProfile(): void {
    navigation.navigate(StackNavigationRoutes.PROFILE);
  }
  function handleLogOut(): void {
    try {
      dispatch(logOut());
    } catch (error) {
      Toast.show(error);
    }
  }

  return (
    <Container>
      {lodash.get(phone, 'token', '') ? (
        <>
          <Text>
            Your phone number:
            {phone.phoneNumber}
          </Text>
          <Button mt={10} onPress={handleLogOut}>
            <Text fontSize={20}>Log out</Text>
          </Button>
          <Button mt={10} onPress={handleClickProfile}>
            <Text fontSize={20}>Profile</Text>
          </Button>
        </>
      ) : (
        <Button onPress={handleClick}>
          <Text fontSize={20}>Go to Registration</Text>
        </Button>
      )}
    </Container>
  );
}
