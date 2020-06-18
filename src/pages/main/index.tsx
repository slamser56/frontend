import React, { useEffect, ReactElement } from 'react';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { logOut, checkToken } from '../../stateManager/user/thunkAction';
import { checkConnect } from '../../stateManager/system/thunkAction';
import { MainRoutes } from '../../navigation/StackNavigationRoutes';
import { selectUser } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await dispatch(checkConnect());
        if (user.token) await dispatch(checkToken(user.token));
      } catch (error) {
        Toast.show(error);
      }
    })();
  }, []);

  function handleSignUp(): void {
    navigation.navigate(MainRoutes.REGISTRATION_STACK);
  }
  function handleSignIn(): void {
    navigation.navigate(MainRoutes.SIGN_IN_STACK);
  }
  function handleProfile(): void {
    navigation.navigate(MainRoutes.PROFILE_STACK);
  }
  function handleLogOut(): void {
    dispatch(logOut());
  }
  return (
    <Container>
      {user.token ? (
        <>
          <Text>{`${t('main.yourPhoneNumber')} : ${user.phoneNumber}`}</Text>
          <Button mt={10} onPress={handleLogOut}>
            <Text fontSize={20}>{t('main.logOut')}</Text>
          </Button>
          <Button mt={10} onPress={handleProfile}>
            <Text fontSize={20}>{t('base.profile')}</Text>
          </Button>
        </>
      ) : (
        <>
          <Button onPress={handleSignUp}>
            <Text fontSize={20}>{t('main.signUp')}</Text>
          </Button>
          <Button mt={10} onPress={handleSignIn}>
            <Text fontSize={20}>{t('main.signIn')}</Text>
          </Button>
        </>
      )}
    </Container>
  );
}
