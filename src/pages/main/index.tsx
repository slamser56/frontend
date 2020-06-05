import React, { useEffect, ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { ListAppState } from '../../stateManager/listTypes';
import { logOut, checkToken } from '../../stateManager/phone/thunkAction';
import { checkConnect } from '../../stateManager/system/thunkAction';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { phone } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    (async (): Promise<void> => {
      dispatch(checkConnect());
      if (phone.token) dispatch(checkToken(phone.token));
    })();
  }, [phone.token]);

  function handleClick(): void {
    navigation.navigate(StackNavigationRoutes.ENTRY);
  }
  function handleClickProfile(): void {
    navigation.navigate(StackNavigationRoutes.PROFILE_STACK);
  }
  function handleLogOut(): void {
    dispatch(logOut());
  }
  return (
    <Container>
      {phone.token ? (
        <>
          <Text>{`${t('main.yourPhoneNumber')} : ${phone.phoneNumber}`}</Text>
          <Button mt={10} onPress={handleLogOut}>
            <Text fontSize={20}>{t('main.logOut')}</Text>
          </Button>
          <Button mt={10} onPress={handleClickProfile}>
            <Text fontSize={20}>{t('base.profile')}</Text>
          </Button>
        </>
      ) : (
        <Button onPress={handleClick}>
          <Text fontSize={20}>{t('main.goToRegistration')}</Text>
        </Button>
      )}
    </Container>
  );
}
